import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { modalTypes } from 'components/PostsModal';

const PostsTableActionButtons = ({ record, setModal, deletePost }) => {
  return (
    <span>
      <Button type="link" onClick={() => setModal({ type: modalTypes.EDIT_POST, record })}>
        <EditOutlined />
      </Button>
      <Button
        type="link"
        danger={true}
        onClick={() => {
          console.log('First confirm, then delete');
          deletePost(record.id);
        }}
      >
        <DeleteOutlined />
      </Button>
    </span>
  );
};

PostsTableActionButtons.propTypes = {
  record: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  setModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsTableActionButtons;
