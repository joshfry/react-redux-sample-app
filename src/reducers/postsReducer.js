import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';

const initialState = {
  posts: [],
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  if (action.type === GET_POSTS_REQUEST) {
    return { ...state, loading: true };
  }

  if (action.type === GET_POSTS_SUCCESS) {
    return { ...state, loading: false, posts: action.payload };
  }

  if (action.type === GET_POSTS_FAILURE) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
};
