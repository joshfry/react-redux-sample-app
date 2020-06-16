import { fetchPosts } from 'resources/api';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POST,
} from 'actions/actionTypes';

// ACTION CREATORS

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
