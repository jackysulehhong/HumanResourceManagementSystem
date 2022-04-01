import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveById, updateLeave } from '../../actions/leaves';
import { Descriptions, Badge, Button, Space, Spin, Tag, Upload } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { updateUser, getUser } from '../../actions/users';
import PageLoading from '../PageLoading/PageLoading';
import _ from 'lodash';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import {
  getTrainingProgress,
  updateTrainingProgress,
} from '../../actions/trainingProgress';

import './TrainingProgressDetails.css';
const TrainingProgressDetail = ({ user: curUser }) => {
  const screens = useBreakpoint();
  const { trainingProgress, isLoading } = useSelector(
    (state) => state.trainingProgress
  );
  const dispatch = useDispatch();
  const [loading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTrainingProgress(id)).then(() => setIsloading(false));
  }, [dispatch, id]);
  const setStatus = (status) => {
    dispatch(updateTrainingProgress(id, { status }));
    if (status == 'Approved') {
      dispatch(getUser(trainingProgress.user._id)).then((user) => {
        dispatch(
          updateUser(user._id, {
            completedHours:
              parseFloat(user.completedHours) +
              parseFloat(trainingProgress.training.duration),
          })
        );
      });
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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

  if (loading || isLoading) return <PageLoading />;
  //if (leaveIsloading || userIsloading) return null;
  return (
    <>
      <Descriptions
        title='Leave Info'
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
        <Descriptions.Item label='Training Total Duration' span={3}>
          {trainingProgress.training.duration} hours
        </Descriptions.Item>

        <Descriptions.Item label='Supporting Documents' span={3}>
          {trainingProgress.attachments.length != 0 ? (
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
              trainingProgress.status == 'Pending Approval' ||
              trainingProgress.status == 'Waiting Completion'
                ? 'processing'
                : trainingProgress.status == 'Approved'
                ? 'success'
                : 'error'
            }
            text={trainingProgress.status}
          />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <br />
      <Space size='middle'>
        <Button onClick={() => navigate(-1)}>Back</Button>

        {trainingProgress.user._id != curUser._id &&
          trainingProgress.status == 'Pending Approval' && (
            <>
              <Button type='success' onClick={() => setStatus('Approved')}>
                Approve
              </Button>
            </>
          )}
      </Space>
    </>
  );
};

export default TrainingProgressDetail;
