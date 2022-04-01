import React, { createRef, useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
  InputNumber,
  Typography,
  Upload,
  Modal,
  Space,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { createTraining } from '../../actions/training';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  DeleteOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import PageLoading from '../PageLoading/PageLoading';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Text } = Typography;

const ExtTrainingForm = ({ user: curUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const { isLoading, training } = useSelector((state) => state.trainings);
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    setError(null);

    let formData = new FormData();
    if (values.upload) {
      for (let file of values.upload) {
        if (file.originFileObj) {
          formData.append('files', file.originFileObj);
        }
      }
    }

    const dateRange = values['date'];
    const startDate = dateRange[0];
    const endDate = dateRange[1];
    const timeRange = values['time'];
    const startTime = timeRange[0];
    const endTime = timeRange[1];

    const trainingData = {
      user_name: `${curUser.first_name} ${curUser.last_name}`,
      user: user._id,
      department: user.department._id,
      organizer: values.organizer,
      title: values.title,
      description: values.description,
      fromDate: startDate.format('YYYY-MM-DD'),
      toDate: endDate.format('YYYY-MM-DD'),
      fromTime: startTime.format('HH:mm'),
      toTime: endTime.format('HH:mm'),
      duration: (
        moment.duration(endTime.diff(startTime)).as('hours') *
        (moment.duration(endDate.diff(startDate)).as('days') + 1)
      ).toFixed(2),
      trainingType: 'External',
      status: 'Pending',
      fee: values.fee,
    };
    Object.entries(trainingData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await dispatch(createTraining(formData));
    Modal.success({
      content:
        'Request successfully submitted. You can check request status at Training History.',
      onOk() {
        navigate('/training/home');
      },
    });
  };
  const defaultFile = () => {
    if (!!!id) return null;
    return (
      training?.attachments?.map((file) => {
        return {
          uid: file.fileId,
          name: file.fileName,
          status: 'done',
          url: file.filePath,
        };
      }) || []
    );
  };

  const preventUpload = (file) => {
    return false;
  };
  //https://stackoverflow.com/a/51519603/4858751
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        External Training Request
      </Typography.Title>
      <Form
        form={form}
        name='basic'
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 8 },
        }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Course Name'
          name='title'
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Please enter course name' />
        </Form.Item>
        <Form.Item
          label='Organizer'
          name='organizer'
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Please enter organizer' />
        </Form.Item>

        <Form.Item
          label='Reason for attending'
          name='description'
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <TextArea rows={4} placeholder='Please enter reason for attending' />
        </Form.Item>

        <Form.Item
          label='Date'
          name='date'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker.RangePicker
            style={{ width: '100%' }}
            disabledDate={(current) => {
              return current && current < moment().endOf('day');
            }}
          />
        </Form.Item>

        <Form.Item
          label='Time'
          name='time'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TimePicker.RangePicker
            style={{ width: '100%' }}
            format='HH:mm'
            minuteStep={15}
            defaultValue={moment('00:00:00', 'HH:mm:ss')}
          />
        </Form.Item>

        <Form.Item
          label='Course Fee(RM)'
          name='fee'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            min={0}
            style={{ width: '100%' }}
            placeholder='Please enter course fee'
          />
        </Form.Item>
        {/**https://github.com/ant-design/ant-design/tree/master/components/upload/UploadList */}
        <Form.Item
          name='upload'
          label='Supporting Documents'
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: 'Please provide documents for workshop details!',
            },
          ]}
        >
          <Upload.Dragger
            name='logo'
            listType='picture'
            beforeUpload={preventUpload}
            customRequest={dummyRequest}
            defaultFileList={defaultFile}
            showUploadList={{
              showDownloadIcon: true,
              downloadIcon: (file) => {
                if (file.status == 'done') return <DownloadOutlined />;
                return <></>;
              },
              showRemoveIcon: true,
              removeIcon: (file) => {
                if (file.status == 'done') return <></>;
                return <DeleteOutlined />;
              },
            }}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            sm: { offset: 8 },
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ExtTrainingForm;
