import React from 'react';
import { Button } from 'antd';

const NewPostButton = ({ handleClick }) => {
  return (
    <Button type="link" size="large" onClick={handleClick}>
      New Post
    </Button>
  );
};

export default NewPostButton;
