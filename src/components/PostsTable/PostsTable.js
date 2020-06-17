import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Loading from 'components/Loading';
import { getPostsColumns } from './getPostsColumns';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const PostsTable = ({ posts, updatePost, deletePost }) => {
  if (posts.length === 0) return <Loading />;

  return (
    <Table
      rowKey="id"
      columns={getPostsColumns()}
      dataSource={posts}
      onChange={onChange}
      showTotal={true}
    />
  );
};

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsTable;
