import React from 'react';
import { Typography } from 'antd';

const PostsResults = ({ posts, filter }) => {
  return (
    <Typography.Text type="secondary">
      {posts.length} results {filter && '(Filtered)'}
    </Typography.Text>
  );
};

export default PostsResults;
