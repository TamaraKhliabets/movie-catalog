import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToFavoriteMovies extends Component {
  componentDidUpdate(prevProps) {
    const {
      checkMovie, movie, userName, movieIsFavorite,
    } = this.props;
    if (userName) {
      if (movie !== prevProps.movie || movieIsFavorite !== prevProps.movieIsFavorite) {
        const { id } = movie;
        checkMovie({ id, userName });
      }
    }
  }

  onSubmit = () => {
    const {
      addToFavoriteMovies, movie, userName, movieIsFavorite, deleteFromFavoriteMovies,
    } = this.props;
    if (movieIsFavorite) {
      deleteFromFavoriteMovies({ movie, userName });
    } else {
      addToFavoriteMovies({ movie, userName });
    }
  };

  render() {
    const { movie, userName, movieIsFavorite } = this.props;
    if (!movie) return <div className="loading" />;
    if (!userName) return <div className="user_auth_true" />;
    return (
      <div>
        <button
          type="button"
          className={movieIsFavorite ? 'isFavorite' : 'isFavoriteFalse'}
          onClick={this.onSubmit}
        />
      </div>);
  }
}

AddToFavoriteMovies.propTypes = {
  movie: PropTypes.instanceOf(Object),
  movieIsFavorite: PropTypes.number,
  addToFavoriteMovies: PropTypes.func.isRequired,
  userName: PropTypes.bool,
  deleteFromFavoriteMovies: PropTypes.func.isRequired,
  checkMovie: PropTypes.func.isRequired,
};

AddToFavoriteMovies.defaultProps = {
  movie: null,
  movieIsFavorite: 0,
  userName: false,
};
