import React from 'react';
import { Layout, Menu } from 'antd';

const Header = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Posts</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
