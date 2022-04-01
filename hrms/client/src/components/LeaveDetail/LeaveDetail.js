import React, { useEffect, useState } from 'react';

import './LeaveDetail.less';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveById, updateLeave } from '../../actions/leaves';
import { Descriptions, Badge, Button, Space, Spin, Tag, Upload } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { updateUser, getUser } from '../../actions/users';
import PageLoading from '../PageLoading/PageLoading';
import _ from 'lodash';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { fetchHolidaysByYear } from '../../actions/holidays';
const LeaveDetail = ({ user: curUser }) => {
  const screens = useBreakpoint();
  const { leave, isLoading: leaveIsloading } = useSelector(
    (state) => state.leaves
  );
  const { holidays } = useSelector((state) => state.holidays);
  const dispatch = useDispatch();
  const [loading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchHolidaysByYear(moment().format('YYYY')));
    dispatch(fetchLeaveById(id)).then(() => setIsloading(false));
  }, [dispatch, id]);

  const calcWorkingDays = (startDate, endDate) => {
    let day = moment(startDate);
    let workingDays = 0;
    ///https://stackoverflow.com/a/45483646
    while (day.isSameOrBefore(endDate, 'day')) {
      if (![0, 6].includes(day.day())) workingDays++;
      day.add(1, 'd');
    }

    holidays?.lists.forEach((holiday) => {
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

  const setStatus = (status) => {
    dispatch(
      updateLeave(id, {
        ...leave,
        status,
        approver: curUser._id,
        user_name: `${curUser.first_name} ${curUser.last_name}`,
      })
    );
    if (status == 'Approved') {
      dispatch(getUser(leave.user._id)).then((user) => {
        const { count: remainLeave } = user.leaveCount.find(
          (l) => l.leaveType._id == leave.leaveType._id
        );

        const dateDiff = calcWorkingDays(leave.startDate, leave.endDate);

        const minDate = remainLeave - dateDiff;
        const newLeaveCount = user.leaveCount.map((l) =>
          l.leaveType._id == leave.leaveType._id ? { ...l, count: minDate } : l
        );
        dispatch(
          updateUser(user._id, {
            leaveCount: newLeaveCount,
          })
        );
      });
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
  if (loading || leaveIsloading) return <PageLoading />;
  //if (leaveIsloading || userIsloading) return null;
  return (
    <>
      <Descriptions
        title='Leave Info'
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout={screens.md ? 'horizontal' : 'vertical'}
      >
        <Descriptions.Item label='Requester' span={3}>
          {`${leave.user.first_name} ${leave.user.last_name}`}
        </Descriptions.Item>
        <Descriptions.Item label='Department' span={3}>
          {leave.department.name}
        </Descriptions.Item>
        <Descriptions.Item label='Leave Type' span={3}>
          {
            <Tag color={leave.leaveType.color}>
              {capitalizeFirstLetter(leave.leaveType.code)}
            </Tag>
          }
        </Descriptions.Item>
        <Descriptions.Item label='Reason' span={3}>
          {leave.reason}
        </Descriptions.Item>
        <Descriptions.Item label='Start Date' span={1}>
          {moment(leave.fromDate).format('YYYY-MM-DD')}
        </Descriptions.Item>
        <Descriptions.Item label='End Date' span={2}>
          {moment(leave.toDate).format('YYYY-MM-DD')}
        </Descriptions.Item>

        <Descriptions.Item label='Supporting Documents' span={3}>
          {leave.attachments.length != 0 ? (
            <>
              <Upload
                className='showFiles'
                defaultFileList={defaultFile}
                showUploadList={{
                  showDownloadIcon: true,

                  showRemoveIcon: false,
                }}
              ></Upload>
            </>
          ) : (
            <div>None</div>
          )}
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge
            status={
              leave.status == 'Pending'
                ? 'processing'
                : leave.status == 'Approved'
                ? 'success'
                : 'error'
            }
            text={leave.status}
          />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <br />
      <Space size='middle'>
        <Button type='default' onClick={() => navigate(-1)}>
          Back
        </Button>
        {leave.status == 'Pending' && leave.user._id == curUser._id ? (
          <>
            <Button
              type='primary'
              danger
              onClick={() => setStatus('Cancelled')}
            >
              Cancel
            </Button>
          </>
        ) : (
          leave.user._id != curUser._id &&
          leave.status == 'Pending' && (
            <>
              <Button type='success' onClick={() => setStatus('Approved')}>
                Approve
              </Button>
              <Button
                type='primary'
                danger
                onClick={() => setStatus('Rejected')}
              >
                Reject
              </Button>
            </>
          )
        )}
      </Space>
    </>
  );
};

export default LeaveDetail;
