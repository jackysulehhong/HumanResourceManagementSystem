import React, { useEffect } from 'react';
import moment from 'moment';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  UploadProps,
} from 'antd';
import { UploadOutlined, InboxOutlined, StarOutlined } from '@ant-design/icons';
import './Test.css';
const { Option } = Select;
const Test = () => {
  //console.log(calcWorkingDays('2021-10-01', '2021-10-11'));

  const beforeUpload = () => {};
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  useEffect(() => {
    notifyMe();
  }, []);

  function notifyMe() {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      var notification = new Notification('Hi there!');
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          var notification = new Notification('Hi there!');
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
  const onFinish = (values) => {
    const files = values.dragger.filter((file) => !!file.originFileObj);
    console.log(files);
  };
  const downloadFile = (downloadFile) => {
    console.log('herer', downloadFile);
  };
  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'done',
    },
  ];
  return <></>;
};

export default Test;
