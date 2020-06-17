import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const PostsTableActionButtons = ({ record, updatePost, deletePost }) => {
  return (
    <span>
      <Button
        type="link"
        onClick={() => console.log(`Open modal, then updatePost({ id: ${record.id} })`)}
      >
        <EditOutlined />
      </Button>
      <Button
        type="link"
        danger={true}
        onClick={() => {
          console.log('First confirm, then delete');
          deletePost({ id: record.id });
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
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
