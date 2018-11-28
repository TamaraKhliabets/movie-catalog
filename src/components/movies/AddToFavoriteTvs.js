import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToFavoriteTvs extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      checkTv, movie, userName, tvIsFavorite,
    } = this.props;
    if (userName) {
      if (movie !== nextProps.movie || tvIsFavorite !== nextProps.tvIsFavorite) {
        const { id } = movie;
        checkTv({ id, userName });
      }
    }
  }

  onSubmit = () => {
    const {
      addToFavoriteTvs, movie, userName, tvIsFavorite, deleteFromFavoriteTvs,
    } = this.props;
    const tv = movie;
    if (tvIsFavorite) {
      deleteFromFavoriteTvs({ tv, userName });
    } else {
      addToFavoriteTvs({ tv, userName });
    }
  };


  render() {
    const { movie, userName, tvIsFavorite } = this.props;
    if (!movie) return <div className="loading" />;
    if (!userName) return <div className="user_auth_true" />;
    return (
      <div>
        <button
          type="button"
          className={tvIsFavorite ? 'isFavorite' : 'isFavoriteFalse'}
          onClick={this.onSubmit}
        />
      </div>);
  }
}

AddToFavoriteTvs.propTypes = {
  movie: PropTypes.instanceOf(Object),
  tvIsFavorite: PropTypes.bool,
  addToFavoriteTvs: PropTypes.func.isRequired,
  userName: PropTypes.bool,
  deleteFromFavoriteTvs: PropTypes.func.isRequired,
  checkTv: PropTypes.func.isRequired,
};

AddToFavoriteTvs.defaultProps = {
  movie: null,
  tvIsFavorite: null,
  userName: false,
};
