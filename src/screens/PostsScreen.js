import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';
import ExportCsvButtonContainer from 'containers/ExportCsvButtonContainer';
import PostsTableContainer from 'containers/PostsTableContainer';
import PostsFilterContainer from 'containers/PostsFilterContainer';
import PostsModalContainer from 'containers/PostsModalContainer';
import Screen from 'components/Screen';
import Toolbar from 'components/Toolbar';
import { modalTypes } from 'components/PostsModal';

const { Title, Text } = Typography;

const PostsScreen = ({ getPosts, posts, filter, modal, setModal }) => {
  const hasPosts = posts.length > 0;

  useEffect(() => {
    if (!hasPosts) getPosts();
  }, []); // eslint-disable-line

  return (
    <Screen>
      <Toolbar>
        <Title>Posts</Title>
        <PostsFilterContainer />
      </Toolbar>

      <Toolbar>
        <div>
          {hasPosts && (
            <Text type="secondary">
              {posts.length} results {filter && '(Filtered)'}
            </Text>
          )}
        </div>
        <div>
          <Button type="link" size="large" onClick={() => setModal({ type: modalTypes.NEW_POST })}>
            New Post
          </Button>
          <ExportCsvButtonContainer />
        </div>
      </Toolbar>

      <PostsTableContainer />
      <PostsModalContainer />
    </Screen>
  );
};

PostsScreen.defaultProps = {
  filter: '',
  modal: { type: '' },
};

PostsScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  filter: PropTypes.string,
  modal: PropTypes.object,
  setModal: PropTypes.func.isRequired,
};

export default PostsScreen;
