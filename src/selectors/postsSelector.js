import { createSelector } from 'reselect';

export const allPostsSelector = (state) => state.posts;

export const postsSelector = createSelector(allPostsSelector, ({ posts, filter }) => {
  if (!filter) return posts;

  return posts.filter((post) => {
    return (
      post.userId.toString() === filter ||
      post.id.toString() === filter ||
      post.title.toUpperCase().includes(filter.toUpperCase()) ||
      post.body.toUpperCase().includes(filter.toUpperCase())
    );
  });
});
