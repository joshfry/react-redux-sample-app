import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import PostsResultsContainer from 'containers/PostsResultsContainer';
import { getPostsColumns } from './getPostsColumns';

const PostsTable = ({ posts }) => (
  <Table
    rowKey="id"
    dataSource={posts}
    columns={getPostsColumns()}
    showTotal={true}
    footer={() => <PostsResultsContainer />}
  />
);

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsTable;
