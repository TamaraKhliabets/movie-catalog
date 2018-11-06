import { connect } from 'react-redux';
import Similar from '../../components/movies/Similar';

const mapStateToProps = ({ similar, direction }) => ({
  similar,
  direction,
});

export default connect(mapStateToProps)(Similar);
