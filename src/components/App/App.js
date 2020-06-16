import React, { useEffect, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import {
  Layout,
  Menu,
  Typography,
  Button,
  Table,
  Spin,
  Modal,
  Form,
  Input,
  InputNumber,
} from 'antd';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  const onFinish = (values) => {
    const post = {
      id: uniqueId(10),
      ...values,
    };
    console.log(post);

    hideModal();
  };

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
          <Typography.Text type="secondary">100 results</Typography.Text>
          <div>
            <Button type="link" size="large" onClick={showModal}>
              New Post
            </Button>
            <Modal centered title="New Post" visible={modalOpen} footer={null} onCancel={hideModal}>
              <Form
                name="new-post"
                layout="vertical"
                validateMessages={{
                  required: '${label} is required.',
                  types: { number: '${label} is not a valid number.' },
                }}
                form={form}
                onFinish={onFinish}
                initialValues={{ body: '' }}
              >
                {/*
                  CREATE Post
                    - UserId(Number), Id(Number), Title(Text) and Body(Text Area) fields.
                    - Keep UserId(Number), Id(Number), Title(Text)  as mandatory fields.
                    - After clicking submit button it will add to the Posts table.

                  UPDATE Post
                    - Open modal, pre-fill form fields with existing row data
                    - Save and update field and reflect change in table

                  DELETE Post
                    - Provide confirmation. Use: `Popconfirm` component
                    - "Do you want to delete the selected post?"
                    - After the confirmation, delete selected row in the table
              */}
                <Form.Item
                  name="userId"
                  label="User Id"
                  rules={[{ required: true, type: 'number', min: 0 }]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="body" label="Body">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item style={{ marginBottom: '0' }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button
                    htmlType="button"
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      form.resetFields();
                      hideModal();
                    }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
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
          <Table
            rowKey="id"
            columns={columns}
            dataSource={data}
            onChange={onChange}
            showTotal={true}
          />
        )}
      </Layout.Content>
    </Layout>
  );
};

export default App;
