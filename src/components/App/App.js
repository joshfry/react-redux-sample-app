import React, { useEffect, useState } from 'react';
import { Layout, Menu, Typography, Input, Button, Table, Spin } from 'antd';
import { DownloadOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
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

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <Layout className="App">
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Posts</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content className="App__main">
        <div className="App__bar">
          <Typography.Title>Posts</Typography.Title>
          <div className="App__search">
            <Input.Search
              placeholder="Search"
              allowClear={true}
              size="large"
              onSearch={(value) => console.log(value)}
            />
          </div>
        </div>
        <div className="App__bar">
          <Typography.Text type="secondary">100 results found</Typography.Text>
          <div>
            <Button type="link" size="large">
              New Post
            </Button>
            <Button type="link" size="large">
              <DownloadOutlined /> Export
            </Button>
          </div>
        </div>
        {data.length === 0 ? (
          <div className="loading-section">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} />} />
          </div>
        ) : (
          <Table columns={columns} dataSource={data} onChange={onChange} rowKey="id" />
        )}
      </Layout.Content>
    </Layout>
  );
};

export default App;
