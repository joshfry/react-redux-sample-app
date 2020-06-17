import { fetchPosts } from 'resources/api';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from 'actions/actionTypes';

// ACTION CREATORS

export const createPost = (payload) => ({ type: CREATE_POST, payload });
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });

// ASYNC ACTION CREATORS

const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
const getPostsSuccess = (payload) => ({ type: GET_POSTS_SUCCESS, payload });
const getPostsFailure = (payload) => ({ type: GET_POSTS_FAILURE, payload });

export const getPosts = () => (dispatch) => {
  dispatch(getPostsRequest());
  fetchPosts
    .then((response) => dispatch(getPostsSuccess(response)))
    .catch((error) => dispatch(getPostsFailure(error.message)));
};
