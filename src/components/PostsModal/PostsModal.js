import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import PostsFormContainer from 'containers/PostsFormContainer';
import { modalTypes } from './index';

const PostsModal = ({ modal, closeModal }) => {
  let title = '';
  if (modal.type === modalTypes.NEW_POST) title = 'New Post';
  if (modal.type === modalTypes.EDIT_POST) title = 'Edit Post';
  if (modal.type === modalTypes.VIEW_POST) title = `Post ${modal.record.id}`;

  return (
    <Modal
      centered
      title={title}
      footer={null}
      destroyOnClose={true}
      visible={modal.type}
      onCancel={closeModal}
    >
      <PostsFormContainer modalType={modal.type} record={modal.record} closeModal={closeModal} />
    </Modal>
  );
};

PostsModal.propTypes = {
  modal: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PostsModal;
