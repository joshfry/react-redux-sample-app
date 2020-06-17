import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} />} />
    </div>
  );
};

export default Loading;
