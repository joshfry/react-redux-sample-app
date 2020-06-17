import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { getPostsColumns } from './getPostsColumns';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const PostsTable = ({ posts }) => {
  return (
    <Table
      rowKey="id"
      dataSource={posts}
      columns={getPostsColumns()}
      showTotal={true}
      onChange={onChange}
    />
  );
};

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsTable;
