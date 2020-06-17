import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Spin } from 'antd';
import { LoadingOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const getColumns = (updatePost, deletePost) => {
  return [
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
          <Button
            type="link"
            onClick={() => console.log(`Open modal, then updatePost({ id: ${record.id} })`)}
          >
            <EditOutlined />
          </Button>
          <Button
            type="link"
            danger={true}
            onClick={() => {
              console.log('First confirm, then delete');
              deletePost({ id: record.id });
            }}
          >
            <DeleteOutlined />
          </Button>
        </span>
      ),
      width: 125,
    },
  ];
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const PostsTable = ({ posts, updatePost, deletePost }) => {
  return (
    <React.Fragment>
      {posts.length === 0 ? (
        <div className="section--loading">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} />} />
        </div>
      ) : (
        <Table
          rowKey="id"
          columns={getColumns(updatePost, deletePost)}
          dataSource={posts}
          onChange={onChange}
          showTotal={true}
        />
      )}
    </React.Fragment>
  );
};

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsTable;
