import { connect } from 'react-redux';
import PostsModal from 'components/PostsModal';

import { setModal } from 'actions/postsActions';

const mapStateToProps = ({ posts }) => {
  return {
    modal: posts.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(setModal({ type: '' })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsModal);
