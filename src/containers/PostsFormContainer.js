import { connect } from 'react-redux';
import PostsForm from 'components/PostsForm';

const mapStateToProps = ({ posts }) => ({ ...posts });

export default connect(mapStateToProps)(PostsForm);
