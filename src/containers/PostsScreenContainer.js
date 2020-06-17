import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsScreen from 'screens/PostsScreen';

import { postsSelector } from 'selectors/postsSelector';
import { getPosts } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => {
  return {
    posts: [...postsSelector({ posts })],
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
