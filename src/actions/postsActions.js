import { fetchPosts } from 'resources/api';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_FILTER,
  SET_MODAL,
} from 'actions/actionTypes';

// ACTION CREATORS

export const createPost = (payload) => ({ type: CREATE_POST, payload });
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });

export const setFilter = (payload) => ({ type: SET_FILTER, payload });
export const setModal = (payload) => ({ type: SET_MODAL, payload });

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
