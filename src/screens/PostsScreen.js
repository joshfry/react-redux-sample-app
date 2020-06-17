import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography, Button, Input, Modal } from 'antd';
import Header from 'components/Header';
import ExportCsvButtonContainer from 'containers/ExportCsvButtonContainer';
import PostsTableContainer from 'containers/PostsTableContainer';
import PostsFormContainer from 'containers/PostsFormContainer';

const PostsScreen = ({ getPosts, posts }) => {
  useEffect(() => {
    if (posts.length === 0) getPosts();
  });

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  return (
    <div className="screen">
      <Layout>
        <Header />
        <Layout.Content className="screen__main">
          <div className="toolbar">
            <div>
              <Typography.Title>Posts</Typography.Title>
            </div>
            <div className="toolbar__search">
              <Input.Search
                placeholder="Search"
                allowClear={true}
                size="large"
                onSearch={(value) => console.log(value)}
              />
            </div>
          </div>
          <div className="toolbar">
            <div>
              {posts.length > 0 && (
                <Typography.Text type="secondary">{posts.length} results</Typography.Text>
              )}
            </div>
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
              <Modal
                centered
                title="New Post"
                visible={modalOpen}
                footer={null}
                onCancel={hideModal}
              >
                <PostsFormContainer hideModal={hideModal} />
              </Modal>
            </div>
          </div>
          <PostsTableContainer />
        </Layout.Content>
      </Layout>
    </div>
  );
};

PostsScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostsScreen;
