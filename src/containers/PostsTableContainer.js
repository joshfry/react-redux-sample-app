import React from 'react';
import { connect } from 'react-redux';
import Loading from 'components/Loading';
import PostsTable from 'components/PostsTable';

import { postsSelector } from 'selectors/postsSelector';

const PostsTableContainer = ({ loading, posts }) => {
  if (loading) return <Loading />;
  return <PostsTable posts={posts} />;
};

const mapStateToProps = ({ posts }) => {
  return {
    loading: posts.loading,
    posts: [...postsSelector({ posts })],
  };
};

export default connect(mapStateToProps)(PostsTableContainer);
