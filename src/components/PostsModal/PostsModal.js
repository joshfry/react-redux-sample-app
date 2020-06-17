import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import PostsForm from 'components/PostsForm';
import { modalTypes } from './index';

const PostsModal = ({ modal, closeModal }) => {
  const title = modal.type === modalTypes.NEW_POST ? 'New Post' : 'Edit Post';

  return (
    <Modal centered title={title} visible={modal.type} footer={null} onCancel={closeModal}>
      <PostsForm record={modal.record} closeModal={closeModal} />
    </Modal>
  );
};

PostsModal.propTypes = {
  modal: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PostsModal;
