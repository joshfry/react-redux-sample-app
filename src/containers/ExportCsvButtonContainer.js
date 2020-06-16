import { connect } from 'react-redux';
import ExportCsvButton from 'components/ExportCsvButton';

const mapStateToProps = ({ posts }) => ({ ...posts });

export default connect(mapStateToProps)(ExportCsvButton);
