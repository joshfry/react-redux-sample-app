import React from 'react';
import { Layout, Menu, Typography, Input, Button, Table } from 'antd';
import { DownloadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.scss';

const columns = [
  {
    title: 'User Id',
    dataIndex: 'userId',
    sorter: {
      compare: (a, b) => a.userId - b.userId,
      multiple: 4,
    },
    width: 150,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    width: 150,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    ellipsis: true,
    // onFilter: (value, record) => record.title.includes(value),
    sorter: {
      compare: (a, b) => a.title.localeCompare(b.title),
      multiple: 2,
    },
  },
  {
    title: 'Body',
    dataIndex: 'body',
    ellipsis: true,
    // onFilter: (value, record) => record.body.includes(value),
    sorter: {
      compare: (a, b) => a.body.localeCompare(b.body),
      multiple: 1,
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <span>
        <Button type="link" onClick={() => console.log('Edit:', { id: record.id })}>
          <EditOutlined />
        </Button>
        <Button type="link" danger={true} onClick={() => console.log('Delete:', { id: record.id })}>
          <DeleteOutlined />
        </Button>
      </span>
    ),
    width: 125,
  },
];

const data = [
  {
    userId: 1,
    id: 1,
    title: 'a',
    body: 'd',
  },
  {
    userId: 1,
    id: 10,
    title: 'b',
    body: 'c',
  },
  {
    userId: 1,
    id: 20,
    title: 'c',
    body: 'd',
  },
  {
    userId: 2,
    id: 11,
    title: 'd',
    body: 'c',
  },
  {
    userId: 3,
    id: 26,
    title: 'c',
    body: 'b',
  },
  {
    userId: 4,
    id: 32,
    title: 'd',
    body: 'a',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const App = () => {
  return (
    <Layout className="App">
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Posts</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content className="App__main">
        <div className="App__page-header">
          <Typography.Title>Posts</Typography.Title>
          <div className="App__page-header__search">
            <Input.Search
              placeholder="Search"
              allowClear={true}
              size="large"
              onSearch={(value) => console.log(value)}
            />
          </div>
        </div>
        <div className="App__toolbar">
          <Button type="link" size="large">
            New Post
          </Button>
          <Button type="link" size="large">
            <DownloadOutlined /> Export
          </Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={onChange} rowKey="id" />
      </Layout.Content>
    </Layout>
  );
};

export default App;
