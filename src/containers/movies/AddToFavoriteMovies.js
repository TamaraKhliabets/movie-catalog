import { connect } from 'react-redux';
import AddToFavoriteMovies from '../../components/movies/AddToFavoriteMovies';
import { addToFavoriteMovies, checkMovie, deleteFromFavoriteMovies } from '../../actions/user';

const mapStateToProps = ({ movie, userName, movieIsFavorite }) => ({
  movie,
  userName,
  movieIsFavorite,
});

const mapDispatchToProps = {
  addToFavoriteMovies,
  checkMovie,
  deleteFromFavoriteMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteMovies);
