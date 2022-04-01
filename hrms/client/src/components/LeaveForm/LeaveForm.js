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
} from 'antd';

import './LeaveForm.css';
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
import { PageLoading } from '@ant-design/pro-layout';
import { fetchHolidaysByYear } from '../../actions/holidays';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Text } = Typography;

const LeaveForm = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { leave } = useSelector((state) => state.leaves);
  const [showRange, setShowRange] = useState(false);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const { holidays } = useSelector((state) => state.holidays);
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const calcWorkingDays = (startDate, endDate) => {
    let day = moment(startDate);
    let workingDays = 0;
    ///https://stackoverflow.com/a/45483646
    while (day.isSameOrBefore(endDate, 'day')) {
      if (![0, 6].includes(day.day())) workingDays++;
      day.add(1, 'd');
    }

    holidays.lists.forEach((holiday) => {
      if (startDate >= holiday.startDate && endDate <= holiday.endDate) {
        const holidayCount = moment(holiday.endDate).diff(
          moment(holiday.startDate),
          'days'
        );

        workingDays -= holidayCount;
      }
    });
    return workingDays;
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    const startDate = rangeValue[0];
    const endDate = rangeValue[1];
    const dateDiff = calcWorkingDays(startDate, endDate);

    if (dateDiff == 0) {
      Modal.error({
        content:
          'Selected day is on holidays or weekend, do not need to apply!',
      });
      return;
    }

    let existedFile = [];
    setError(null);

    let formData = new FormData();
    if (values.upload) {
      for (let file of values.upload) {
        if (file.originFileObj) {
          formData.append('files', file.originFileObj);
        } else {
          existedFile.push(leave.attachments.find((a) => a.fileId == file.uid));
        }
      }
    } else {
      if (id) {
        existedFile = leave.attachments;
      }
    }

    const type = leaveTypes.find((rec) => rec._id === values['leaveType']);

    let { count: remainLeave } = user.leaveCount.find(
      (l) => l.leaveType._id == values['leaveType']
    );

    const leaveData = {
      user_name: `${user.first_name} ${user.last_name}`,
      reason: values.reason || '',
      leaveType: values.leaveType,
      user: user._id,
      department: user.department._id,
      fromDate: startDate.format('YYYY-MM-DD HH:mm'),
      toDate: endDate.format('YYYY-MM-DD HH:mm'),
    };
    Object.entries(leaveData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    //  console.log(...formData);

    if (remainLeave >= dateDiff) {
      if (id) {
        formData.append('attachments', JSON.stringify(existedFile));
        dispatch(updateLeave(id, formData));
        Modal.success({
          content: 'Changes saved.',
          onOk() {
            navigate('/leaves/home');
          },
        });
      } else {
        dispatch(createLeave(formData));
        Modal.success({
          content: 'Leave application submitted.',
          onOk() {
            navigate('/leaves/home');
          },
        });
      }
    } else {
      setError('Insufficient leave balance');
    }
  };
  const defaultFile = () => {
    if (!!!id) return null;
    return (
      leave?.attachments?.map((file) => {
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
    dispatch(fetchHolidaysByYear(moment().format('YYYY')));
    dispatch(getLeaveTypes());

    if (id) {
      setLoading(true);
      dispatch(fetchLeaveById(id)).then((leave) => {
        form.setFieldsValue({
          reason: leave.reason || '',
          leaveType: leave.leaveType._id,
          'range-picker': [moment(leave.fromDate), moment(leave.toDate)],
        });
        setLoading(false);
      });
    }
  }, [dispatch, id]);

  //https://stackoverflow.com/a/51519603/4858751
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const disabledDate = (val) => {
    const ltVal = form.getFieldValue('leaveType');

    if (!ltVal) return true;
    const lt = leaveTypes.find((l) => l._id == ltVal);
    const ltStart = lt.startDate;
    const ltEnd = lt.endDate;
    let start, end;
    if (ltStart == 'year' || ltStart == 'month') {
      start = moment().startOf(ltStart);
    } else {
      const operator = ltStart.charAt(0);
      const day = parseInt(ltStart.substring(1));
      if (operator == '+') {
        start = moment().add(day, 'days');
      } else {
        start = moment().subtract(day, 'days');
      }
    }

    if (ltEnd == 'year' || ltEnd == 'month') {
      end = moment().endOf(ltEnd);
    } else {
      const operator = ltEnd.charAt(0);
      const day = parseInt(ltEnd.substring(1));
      if (operator == '+') {
        end = moment().add(day, 'days');
      } else {
        end = moment().subtract(day, 'days');
      }
    }

    return val < start || val > end;
  };

  if (loading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        {id ? 'Edit Leave' : 'Apply for Leave'}
      </Typography.Title>

      <Form
        form={form}
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
          label='Leave Type'
          name='leaveType'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder='Please choose a leave type'>
            {user.leaveCount.map((leave) => (
              <Option key={leave.leaveType._id} value={leave.leaveType._id}>
                {leave.leaveType.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label='Reason'
          name='reason'
          rules={[{ required: true, whitespace: true }]}
        >
          <TextArea rows={4} placeholder='Please enter reason' />
        </Form.Item>

        <Form.Item
          label='Date'
          name='range-picker'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <RangePicker style={{ width: '100%' }} disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item
          name='upload'
          label='Supporting Documents'
          valuePropName='fileList'
          getValueFromEvent={normFile}
        >
          <Upload.Dragger
            name='logo'
            listType='picture'
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
export default LeaveForm;
