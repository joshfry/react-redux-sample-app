import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const PostsResults = ({ posts, filter }) => {
  return (
    <Typography.Text type="secondary">
      {posts.length} results {filter && '(Filtered)'}
    </Typography.Text>
  );
};

PostsResults.propTypes = {
  posts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default PostsResults;
