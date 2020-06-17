import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Modal } from 'antd';
import ExportCsvButtonContainer from 'containers/ExportCsvButtonContainer';
import PostsTableContainer from 'containers/PostsTableContainer';
import PostsFilterContainer from 'containers/PostsFilterContainer';
import Screen from 'components/Screen';
import Toolbar from 'components/Toolbar';
import PostsForm from 'components/PostsForm';

const { Title, Text } = Typography;

const PostsScreen = ({ getPosts, posts }) => {
  const hasPosts = posts.length > 0;

  useEffect(() => {
    if (!hasPosts) getPosts();
  }, []); // eslint-disable-line

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  return (
    <Screen>
      <Toolbar>
        <Title>Posts</Title>
        <PostsFilterContainer />
      </Toolbar>

      <Toolbar>
        <div>{hasPosts && <Text type="secondary">{posts.length} results</Text>}</div>
        <div>
          <Button
            type="link"
            size="large"
            onClick={() => {
              showModal();
            }}
          >
            New Post
          </Button>
          <ExportCsvButtonContainer />
        </div>
      </Toolbar>

      <PostsTableContainer />

      <Modal centered title="New Post" visible={modalOpen} footer={null} onCancel={hideModal}>
        <PostsForm hideModal={hideModal} />
      </Modal>
    </Screen>
  );
};

PostsScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostsScreen;
