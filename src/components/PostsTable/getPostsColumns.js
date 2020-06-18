import React from 'react';
import PostsTableActionButtonsContainer from 'containers/PostsTableActionButtonsContainer';

export const getPostsColumns = () => {
  return [
    {
      title: 'User Id',
      dataIndex: 'userId',
      sorter: {
        compare: (a, b) => a.userId - b.userId,
        multiple: 4,
      },
      width: 120,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
      width: 120,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      ellipsis: true,
      sorter: {
        compare: (a, b) => a.title.localeCompare(b.title),
        multiple: 2,
      },
      // width: 400,
    },
    {
      title: 'Body',
      dataIndex: 'body',
      ellipsis: true,
      sorter: {
        compare: (a, b) => a.body.localeCompare(b.body),
        multiple: 1,
      },
      // width: 400,
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (record) => <PostsTableActionButtonsContainer record={record} />,
      width: 110,
    },
  ];
};
