import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const PostsFilter = ({ isDisabled, setFilter }) => {
  return (
    <div className="PostsFilter">
      <Input.Search
        size="large"
        placeholder="Search"
        allowClear={true}
        disabled={isDisabled}
        onSearch={setFilter}
        // when user manually deletes search value, clear the filter
        onChange={(e) => !e.target.value && e.type !== 'click' && setFilter('')}
      />
    </div>
  );
};

PostsFilter.defaultProps = {
  isDisabled: false,
};

PostsFilter.propTypes = {
  isDisabled: PropTypes.bool,
  setFilter: PropTypes.func.isRequired,
};

export default PostsFilter;
