import React, { useState, useEffect } from 'react';
import uniqueId from 'lodash/uniqueId';
import { Layout, Typography, Button, Table, Spin, Modal, Form, Input, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import Header from 'components/Header';
import ExportCsvButtonContainer from 'containers/ExportCsvButtonContainer';

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

const PostsScreen = ({ getPosts, posts }) => {
  useEffect(() => {
    if (posts.length === 0) getPosts();
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();

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
    <div className="App">
      <Layout>
        <Header />
        <Layout.Content className="App__main">
          <div className="App__bar">
            <div>
              <Typography.Title>Posts</Typography.Title>
            </div>
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
            <div>
              {posts.length > 0 && (
                <Typography.Text type="secondary">{posts.length} results</Typography.Text>
              )}
            </div>
            <div>
              <Button type="link" size="large" onClick={showModal}>
                New Post
              </Button>
              <ExportCsvButtonContainer />
              <Modal
                centered
                title="New Post"
                visible={modalOpen}
                footer={null}
                onCancel={hideModal}
              >
                <Form
                  name="new-post"
                  layout="vertical"
                  validateMessages={{
                    required: '${label} is required.', // eslint-disable-line
                    types: { number: '${label} is not a valid number.' }, // eslint-disable-line
                  }}
                  form={form}
                  onFinish={onFinish}
                  initialValues={{ body: '' }}
                >
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
            </div>
          </div>
          {posts.length === 0 ? (
            <div className="loading-section">
              <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} />} />
            </div>
          ) : (
            <Table
              rowKey="id"
              columns={columns}
              dataSource={posts}
              onChange={onChange}
              showTotal={true}
            />
          )}
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default PostsScreen;
