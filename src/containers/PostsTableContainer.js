import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsTable from 'components/PostsTable';

import { updatePost, deletePost } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => ({ ...posts });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePost, deletePost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable);
