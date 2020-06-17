import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Input, Modal } from 'antd';
import ExportCsvButtonContainer from 'containers/ExportCsvButtonContainer';
import PostsTableContainer from 'containers/PostsTableContainer';
import PostsFormContainer from 'containers/PostsFormContainer';
import Screen from 'components/Screen';
import Toolbar from 'components/Toolbar';

const { Title, Text } = Typography;

const PostsScreen = ({ getPosts, posts }) => {
  const hasPosts = posts.length > 0;

  useEffect(() => {
    if (!hasPosts) getPosts();
  });

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  return (
    <Screen>
      <Toolbar>
        <Title style={{ margin: 0 }}>Posts</Title>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Input.Search
            placeholder="Search"
            allowClear={true}
            size="large"
            onSearch={(value) => console.log(value)}
          />
        </div>
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
        <PostsFormContainer hideModal={hideModal} />
      </Modal>
    </Screen>
  );
};

PostsScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostsScreen;
