import { connect } from 'react-redux';
import UserMovies from '../../components/user/UserMovies';

const mapStateToProps = ({ moviesFavorite }) => ({
  moviesFavorite,
});

export default connect(mapStateToProps)(UserMovies);
