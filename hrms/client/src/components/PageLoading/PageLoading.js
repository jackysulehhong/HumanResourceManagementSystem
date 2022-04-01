import React from 'react';
import { Spin } from 'antd';

const PageLoading = ({ props }) => {
  return (
    <div
      style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}
      className='antdp-page-loading'
    >
      <Spin size='large' tip='Loading...' {...props} />
    </div>
  );
};

export default PageLoading;
