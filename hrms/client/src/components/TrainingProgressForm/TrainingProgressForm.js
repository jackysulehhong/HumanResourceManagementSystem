import React, { createRef, useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Typography,
  Upload,
  Modal,
  Descriptions,
  Row,
  Col,
  Space,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { createLeave, fetchLeaveById, updateLeave } from '../../actions/leaves';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getLeaveTypes } from '../../actions/leaveTypes';
import {
  DeleteOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import {
  getTrainingProgress,
  updateTrainingProgress,
} from '../../actions/trainingProgress';
import { PageLoading } from '@ant-design/pro-layout';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Text } = Typography;

const TrainingProgressForm = ({ user }) => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const { id } = useParams();
  const { trainingProgress } = useSelector((state) => state.trainingProgress);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const calcWorkingDays = (startDate, endDate) => {
    let day = moment(startDate);
    let workingDays = 0;
    ///https://stackoverflow.com/a/45483646
    while (day.isSameOrBefore(endDate, 'day')) {
      if (![0, 6].includes(day.day())) workingDays++;
      day.add(1, 'd');
    }
    return workingDays;
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values) => {
    let existedFile = [];
    setError(null);

    let formData = new FormData();
    if (values.upload) {
      for (let file of values.upload) {
        if (file.originFileObj) {
          formData.append('files', file.originFileObj);
        } else {
          existedFile.push(
            trainingProgress.attachments.find((a) => a.fileId == file.uid)
          );
        }
      }
    } else {
      if (id) {
        existedFile = trainingProgress.attachments;
      }
    }
    formData.append('status', 'Pending Approval');
    formData.append('attachments', JSON.stringify(existedFile));

    dispatch(updateTrainingProgress(id, formData));
    Modal.success({
      content: 'Changes saved.',
      onOk() {
        navigate('/trainingProgress/history');
      },
    });
  };
  const defaultFile = () => {
    if (!!!id) return null;
    return (
      trainingProgress?.attachments?.map((file) => {
        return {
          uid: file.fileId,
          name: file.fileName,
          status: 'done',
          url: file.filePath,
        };
      }) || []
    );
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(getTrainingProgress(id)).then(() => {
        setLoading(false);
      });
    }
  }, [dispatch, id]);

  const preventUpload = (file) => {
    return false;
  };
  //https://stackoverflow.com/a/51519603/4858751
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  if (loading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Training Progress Certification Upload
      </Typography.Title>

      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout={screens.md ? 'horizontal' : 'vertical'}
      >
        <Descriptions.Item label='Name' span={3}>
          {`${trainingProgress.user.first_name} ${trainingProgress.user.last_name}`}
        </Descriptions.Item>
        <Descriptions.Item label='Course Name' span={3}>
          {trainingProgress.training.title}
        </Descriptions.Item>
        <Descriptions.Item label='Reason for Attending' span={3}>
          {trainingProgress.training.description}
        </Descriptions.Item>
        <Descriptions.Item label='Training Type' span={3}>
          {trainingProgress.training.trainingType}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />

      <Form
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 8 },
        }}
        form={form}
        name='basic'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          name='upload'
          label='Certifications'
          getValueFromEvent={normFile}
          rules={[
            () => ({
              validator(_, value) {
                if (
                  trainingProgress?.attachments.length != 0 ||
                  value.length != 0
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Upload cannot be empty'));
              },
            }),
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
          <Button
            type='secondary'
            htmlType='button'
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default TrainingProgressForm;
