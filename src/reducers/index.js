import { combineReducers } from 'redux';

import posts from 'reducers/postsReducer';

export default () =>
  combineReducers({
    posts,
  });
