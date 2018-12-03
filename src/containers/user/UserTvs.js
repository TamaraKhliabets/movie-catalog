import { connect } from 'react-redux';
import UserTvs from '../../components/user/UserTvs';

const mapStateToProps = ({ tvsFavorite }) => ({
  tvsFavorite,
});

export default connect(mapStateToProps)(UserTvs);
