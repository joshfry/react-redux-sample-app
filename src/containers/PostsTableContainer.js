import { connect } from 'react-redux';
import PostsTable from 'components/PostsTable';

const mapStateToProps = ({ posts }) => ({ ...posts });

export default connect(mapStateToProps)(PostsTable);
