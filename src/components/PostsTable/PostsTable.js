import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import PostsResultsContainer from 'containers/PostsResultsContainer';
import { getPostsColumns } from './getPostsColumns';

const PostsTable = ({ posts }) => (
  <Table
    rowKey="id"
    size="small"
    dataSource={posts}
    columns={getPostsColumns()}
    showTotal={true}
    scroll={{ x: 1300 }}
    footer={() => <PostsResultsContainer />}
  />
);

PostsTable.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsTable;
