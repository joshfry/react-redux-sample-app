import { fetchPosts } from 'resources/api';
import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from 'actions/actionTypes';

// ACTION CREATORS

const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
const getPostsSuccess = (payload) => ({ type: GET_POSTS_SUCCESS, payload });
const getPostsFailure = (payload) => ({ type: GET_POSTS_FAILURE, payload });

// ASYNC ACTIONS

export const getPosts = () => (dispatch) => {
  dispatch(getPostsRequest());
  fetchPosts
    .then((response) => dispatch(getPostsSuccess(response)))
    .catch((error) => dispatch(getPostsFailure(error.message)));
};
