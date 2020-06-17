import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_FILTER,
} from 'actions/actionTypes';

const initialState = {
  posts: [],
  loading: true,
  error: null,
  filter: '',
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

  if (action.type === CREATE_POST) {
    console.log(action);
    return state;
  }

  if (action.type === UPDATE_POST) {
    console.log(action);
    return state;
  }

  if (action.type === DELETE_POST) {
    const { posts, ...values } = state;
    const filteredPosts = state.posts.filter((post) => post.id !== action.payload.id);
    return { posts: filteredPosts, ...values };
  }

  if (action.type === SET_FILTER) {
    return { ...state, filter: action.payload };
  }

  return state;
};
