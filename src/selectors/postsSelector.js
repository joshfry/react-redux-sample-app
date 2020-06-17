import { createSelector } from 'reselect';

export const allPostsSelector = (state) => state.posts;

export const postsSelector = createSelector(allPostsSelector, ({ posts, filter }) => {
  if (!filter) return posts;

  return posts.filter((post) => {
    return (
      post.userId.toString() === filter ||
      post.id.toString() === filter ||
      post.title.includes(filter) ||
      post.body.includes(filter)
    );
  });
});
