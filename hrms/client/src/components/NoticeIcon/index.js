import { useEffect, useState } from 'react';
import { Tag, message } from 'antd';
import { groupBy } from 'lodash';
import moment from 'moment';

import NoticeIcon from './NoticeIcon';
import './index.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearNotificationsByType,
  getNotificationsById,
  setNotificationRead,
} from '../../actions/notification';
import { useLocation, useNavigate } from 'react-router-dom';
const getNotices = () => {
  return {
    data: [
      {
        id: '000000001',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '你收到了 14 份新周报',
        datetime: '2017-08-09',
        type: 'notification',
      },
      {
        id: '000000002',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        datetime: '2017-08-08',
        type: 'notification',
      },
      {
        id: '000000003',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '这种模板可以区分多种通知类型',
        datetime: '2017-08-07',
        read: true,
        type: 'notification',
      },
      {
        id: '000000004',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '左侧图标用于区分不同的类型',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000005',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '内容不要超过两行字，超出时自动截断',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000006',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        description: '描述信息描述信息描述信息',
        datetime: '2017-08-07',
        type: 'notification',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '朱偏右 回复了你',
        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        datetime: '2017-08-07',
        type: 'notification',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '标题',
        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        datetime: '2017-08-07',
        type: 'notification',
        clickClose: true,
      },
      {
        id: '000000009',
        title: '任务名称',
        description: '任务需要在 2017-01-12 20:00 前启动',
        extra: '未开始',
        status: 'todo',
        type: 'notification',
      },
      {
        id: '000000010',
        title: '第三方紧急代码变更',
        description:
          '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        extra: '马上到期',
        status: 'urgent',
        type: 'notification',
      },
      {
        id: '000000011',
        title: '信息安全考试',
        description: '指派竹尔于 2017-01-09 前完成更新并发布',
        extra: '已耗时 8 天',
        status: 'doing',
        type: 'notification',
      },
      {
        id: '000000012',
        title: 'ABCD 版本发布',
        description:
          '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        extra: '进行中',
        status: 'processing',
        type: 'notification',
      },
    ],
  };
};
const getNoticeData = (notices) => {
  if (!notices || notices.length === 0 || !Array.isArray(notices)) {
    return {};
  }

  const newNotices = notices.map((notice) => {
    const newNotice = { ...notice };

    if (newNotice.createdAt) {
      newNotice.createdAt = moment(notice.createdAt).fromNow();
    }

    if (newNotice._id) {
      newNotice.key = newNotice._id;
    }

    if (newNotice.content.status) {
      const color = {
        Pending: 'blue',
        Rejected: 'red',
        Approved: 'green',
        'Waiting Completion': 'blue',
        'Pending Approval': 'blue',
      }[newNotice.content.status];
      newNotice.extra = (
        <Tag
          color={color}
          style={{
            marginRight: 0,
          }}
        >
          {newNotice.content.status}
        </Tag>
      );
    }
    return newNotice;
  });
  return groupBy(newNotices, 'content.type');
};

const getUnreadData = (noticeData) => {
  const unreadMsg = {};
  Object.keys(noticeData).forEach((key) => {
    const value = noticeData[key];

    if (!unreadMsg[key]) {
      unreadMsg[key] = 0;
    }

    if (Array.isArray(value)) {
      unreadMsg[key] = value.filter((item) => !item.read).length;
    }
  });
  return unreadMsg;
};
const getTotalUnreadCount = (unreadMsg) => {
  let total = 0;
  for (const key in unreadMsg) {
    total += unreadMsg[key];
  }
  return total;
};
const NoticeIconView = ({ user, socket }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [random, setRandom] = useState({ key: Math.random() });
  const { notifications, isLoading } = useSelector(
    (state) => state.notifications
  );
  const [notices, setNotices] = useState(notifications);
  let noticeData = getNoticeData(notices);
  let unreadMsg = getUnreadData(noticeData || {});
  let totalCount = getTotalUnreadCount(unreadMsg);

  useEffect(() => {
    if (user) {
      dispatch(getNotificationsById(user._id)).then((data) => {
        setNotices(data);
      });
    }
  }, [user, location]);

  useEffect(() => {
    if (user) {
      socket?.on('newNotification', () => {
        dispatch(getNotificationsById(user._id)).then((data) => {
          setNotices(data);
        });
      });
    }
  }, [socket, user]);

  // const { initialState } = useModel('@@initialState');
  // const { currentUser } = initialState || {};

  /** 
  useEffect(() => {
    // getNotices().then(({ data }) => setNotices(data || []));
    // setNotices(getNotices().data || []);
  }, []);
*/

  const changeReadState = async (id) => {
    const newN = notices.map((item) => {
      const notice = { ...item };
      if (notice._id === id) {
        if (!notice.read) {
          dispatch(setNotificationRead(id));
          notice.read = true;
        }
        if (notice.content.type == 'leave') {
          navigate(`leaves/view/${notice.content.id}`);
        } else if (notice.content.type == 'training') {
          navigate(`training/view/${notice.content.id}`);
        }
      }
      return notice;
    });
    setNotices(newN);
  };

  const clearReadState = async (title, key) => {
    await dispatch(clearNotificationsByType(user._id, { type: key }));
    const newN = notices.filter((item) => item.content.type != key);

    setNotices(newN);

    message.success(`${'Clear'} ${title}`);
  };
  return (
    <NoticeIcon
      className={`action`}
      //count={currentUser&&currentUser.unreadCount}
      count={totalCount}
      onItemClick={(item) => {
        changeReadState(item._id);
      }}
      onClear={(title, key) => clearReadState(title, key)}
      loading={isLoading}
      clearText='Clear'
      viewMoreText='View More'
      onViewMore={() => message.info('Click on view more')}
      clearClose
    >
      <NoticeIcon.Tab
        tabKey='leave'
        count={unreadMsg.leave}
        list={noticeData.leave}
        title='Leave'
        emptyText='You have no new notifiications'
      />
      <NoticeIcon.Tab
        tabKey='training'
        count={unreadMsg.training}
        list={noticeData.training}
        title='Training'
        emptyText='You have no new notifiications'
      />
      {/**
 
      <NoticeIcon.Tab
        tabKey='event'
        title='待办'
        emptyText='你已完成所有待办'
        count={unreadMsg.event}
        list={noticeData.event}
        showViewMore
      /> */}
    </NoticeIcon>
  );
};

export default NoticeIconView;
