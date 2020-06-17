import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const NewPostButton = ({ handleClick }) => {
  return (
    <Button type="link" size="large" onClick={handleClick}>
      New Post
    </Button>
  );
};

NewPostButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NewPostButton;
