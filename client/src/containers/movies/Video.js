import { connect } from 'react-redux';
import Video from '../../components/movies/Video';

const mapStateToProps = ({ video }) => ({
  video,
});

export default connect(mapStateToProps)(Video);
