import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsScreen from 'screens/PostsScreen';

import { postsSelector } from 'selectors/postsSelector';
import { getPosts, setModal } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => {
  return {
    filter: posts.filter,
    modal: posts.modal,
    posts: [...postsSelector({ posts })],
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts, setModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
