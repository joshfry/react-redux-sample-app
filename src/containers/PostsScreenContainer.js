import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsScreen from 'screens/PostsScreen';

import { getPosts } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => ({ ...posts });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
