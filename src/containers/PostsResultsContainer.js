import { connect } from 'react-redux';
import PostsResults from 'components/PostsResults';

import { postsSelector } from 'selectors/postsSelector';

const mapStateToProps = ({ posts }) => {
  return {
    filter: posts.filter,
    modal: posts.modal,
    posts: [...postsSelector({ posts })],
  };
};

export default connect(mapStateToProps)(PostsResults);
