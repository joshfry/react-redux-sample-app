import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsTable from 'components/PostsTable';

import { deletePost } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => ({ ...posts });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deletePost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable);
