import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsForm from 'components/PostsForm';

import { createPost, updatePost } from 'actions/postsActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost, updatePost }, dispatch);
};

export default connect(null, mapDispatchToProps)(PostsForm);
