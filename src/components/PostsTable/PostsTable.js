import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { getPostsColumns } from './getPostsColumns';

const PostsTable = ({ posts }) => {
  return <Table rowKey="id" dataSource={posts} columns={getPostsColumns()} showTotal={true} />;
};

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsTable;
