import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_KEY, URL } from '../../constants';
import DataMovie from '../../containers/movies/DataMovie';
import Cast from '../../containers/movies/Cast';
import Video from '../../containers/movies/Video';
import Similar from '../../containers/movies/Similar';
import Reviews from '../../containers/movies/Reviews';
import AddToFavoriteMovies from '../../containers/movies/AddToFavoriteMovies';
import AddToFavoriteTvs from '../../containers/movies/AddToFavoriteTvs';

export default class ItemReq extends Component {
  componentDidMount() {
    const { url, movieFetchData } = this.props;
    movieFetchData(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=videos,similar,credits,reviews'}`);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (id !== prevProps.id) {
      const { url, movieFetchData } = this.props;
      movieFetchData(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=videos,similar,credits,reviews'}`);
    }
  }


  render() {
    const { direction } = this.props;
    return (
      <div>
        { direction === 'movie?' ? <AddToFavoriteMovies /> : <AddToFavoriteTvs />}
        <DataMovie />
        <Cast />
        <Video />
        <Similar />
        <Reviews />
      </div>
    );
  }
}

ItemReq.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  direction: PropTypes.string,
  movieFetchData: PropTypes.func.isRequired,
};

ItemReq.defaultProps = { url: null, id: '', direction: '' };
