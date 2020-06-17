import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './PostsFilter.scss';

const PostsFilter = ({ setFilter }) => {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Input.Search placeholder="Search" allowClear={true} size="large" onSearch={setFilter} />
    </div>
  );
};

PostsFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default PostsFilter;
