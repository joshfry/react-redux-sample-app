import { connect } from 'react-redux';
import ExportCsvButton from 'components/ExportCsvButton';

import { postsSelector } from 'selectors/postsSelector';

const mapStateToProps = ({ posts }) => {
  return {
    posts: [...postsSelector({ posts })],
  };
};

export default connect(mapStateToProps)(ExportCsvButton);
