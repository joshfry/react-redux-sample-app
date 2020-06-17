import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsFilter from 'components/PostsFilter';

import { setFilter } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => {
  return {
    isDisabled: posts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setFilter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsFilter);
