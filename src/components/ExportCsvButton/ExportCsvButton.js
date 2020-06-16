import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const createCsv = (posts) => {
  return encodeURI(
    'data:text/csv;charset=utf-8,' +
      posts
        .map((post) =>
          Object.entries(post)
            .map((entry) => entry[1].toString().replace(/\n/g, ' '))
            .join(','),
        )
        .join('\n'),
  );
};

const ExportCsvButton = ({ posts }) => {
  return (
    <Button
      type="link"
      size="large"
      disabled={posts.length === 0}
      onClick={() => window.open(createCsv(posts), '_blank')}
    >
      <DownloadOutlined /> Export
    </Button>
  );
};

ExportCsvButton.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default ExportCsvButton;
