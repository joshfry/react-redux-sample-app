import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsTableActionButtons from 'components/PostsTable/PostsTableActionButtons';

import { setModal, deletePost } from 'actions/postsActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setModal, deletePost }, dispatch);
};

export default connect(null, mapDispatchToProps)(PostsTableActionButtons);
