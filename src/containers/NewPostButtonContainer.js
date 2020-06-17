import { connect } from 'react-redux';
import NewPostButton from 'components/NewPostButton';
import { modalTypes } from 'components/PostsModal';

import { setModal } from 'actions/postsActions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(setModal({ type: modalTypes.NEW_POST })),
  };
};

export default connect(null, mapDispatchToProps)(NewPostButton);
