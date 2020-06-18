import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import ExportPostsButtonContainer from 'containers/ExportPostsButtonContainer';
import NewPostButtonContainer from 'containers/NewPostButtonContainer';
import PostsFilterContainer from 'containers/PostsFilterContainer';
import PostsModalContainer from 'containers/PostsModalContainer';
import PostsResultsContainer from 'containers/PostsResultsContainer';
import PostsTableContainer from 'containers/PostsTableContainer';
import Screen from 'components/Screen';
import Toolbar from 'components/Toolbar';

const PostsScreen = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Screen>
      <Toolbar>
        <Typography.Title>Posts</Typography.Title>
        <PostsFilterContainer />
      </Toolbar>
      <Toolbar>
        <div>
          <PostsResultsContainer />
        </div>
        <div>
          <NewPostButtonContainer />
          <ExportPostsButtonContainer />
        </div>
      </Toolbar>
      <PostsTableContainer />
      <PostsModalContainer />
    </Screen>
  );
};

PostsScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostsScreen;
