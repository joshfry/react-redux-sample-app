import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { modalTypes } from 'components/PostsModal';

const PostsTableActionButtons = ({ record, setModal, deletePost }) => {
  return (
    <span>
      <Button type="link" onClick={() => setModal({ type: modalTypes.EDIT_POST, record })}>
        <EditOutlined />
      </Button>
      <Popconfirm
        title="Delete the selected post?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => deletePost(record.id)}
      >
        <Button type="link" danger={true}>
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </span>
  );
};

PostsTableActionButtons.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  setModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsTableActionButtons;
