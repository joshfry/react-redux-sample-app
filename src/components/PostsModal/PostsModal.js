import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import PostsFormContainer from 'containers/PostsFormContainer';
import { modalTypes } from './index';

const PostsModal = ({ modal, closeModal }) => {
  const title = modal.type === modalTypes.NEW_POST ? 'New Post' : 'Edit Post';

  return (
    <Modal
      centered
      title={title}
      footer={null}
      destroyOnClose={true}
      visible={modal.type}
      onCancel={closeModal}
    >
      <PostsFormContainer record={modal.record} closeModal={closeModal} />
    </Modal>
  );
};

PostsModal.propTypes = {
  modal: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PostsModal;
