import { connect } from 'react-redux';
import ExportPostsButton from 'components/ExportPostsButton';

import { postsSelector } from 'selectors/postsSelector';

const mapStateToProps = ({ posts }) => {
  return {
    posts: [...postsSelector({ posts })],
  };
};

export default connect(mapStateToProps)(ExportPostsButton);
