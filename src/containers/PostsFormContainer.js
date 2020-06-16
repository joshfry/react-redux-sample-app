import React from 'react';
import { connect } from 'react-redux';
import PostsForm from 'components/PostsForm';

const mapStateToProps = ({ posts }) => ({ ...posts });

const PostsFormContainer = (props) => {
  return <PostsForm {...props} />;
};

export default connect(mapStateToProps)(PostsFormContainer);
