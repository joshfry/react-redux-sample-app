import React from 'react';
import PropTypes from 'prop-types';
import { DownloadOutlined } from '@ant-design/icons';

const cratePostsCsv = (posts) => {
  return encodeURIComponent(
    'User Id, Id, Title, Body\n' +
      posts
        .map((post) =>
          Object.entries(post)
            .map((entry) => entry[1].toString().replace(/\n/g, ' '))
            .join(','),
        )
        .join('\n'),
  );
};

const ExportPostsButton = ({ posts }) => {
  return (
    <a
      className="ant-btn ant-btn-link ant-btn-lg"
      href={`data:text/plain;charset=utf-8,${cratePostsCsv(posts)}`}
      download="Posts.csv"
    >
      <DownloadOutlined /> Export
    </a>
  );
};

ExportPostsButton.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default ExportPostsButton;
