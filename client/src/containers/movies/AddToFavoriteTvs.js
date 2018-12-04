import { connect } from 'react-redux';
import AddToFavoriteTvs from '../../components/movies/AddToFavoriteTvs';
import { addToFavoriteTvs, checkTv, deleteFromFavoriteTvs } from '../../actions/user';

const mapStateToProps = ({ movie, userName, tvIsFavorite }) => ({
  movie,
  userName,
  tvIsFavorite,
});

const mapDispatchToProps = {
  addToFavoriteTvs,
  checkTv,
  deleteFromFavoriteTvs,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteTvs);
