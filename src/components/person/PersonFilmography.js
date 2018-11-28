import React from 'react';
import PropTypes from 'prop-types';
import PersonMovies from '../../containers/person/PersonMovies';

function PersonFilmography({
  person, personMovie, personTv, setActualMovies, showMovies,
}) {
  if (!personMovie || !personTv) return <div className="null" />;
  return (
    <div>
      <div className="personFilmography">
        {personMovie.length ? (
          <button
            type="button"
            onClick={() => setActualMovies(!showMovies)}
            className={showMovies
              ? 'personFilmography_button_active personFilmography_button_active_left'
              : 'personFilmography_button'}
          >
            {`${person.name}'s movies`}
          </button>) : null}
        {personTv.length ? (
          <button
            type="button"
            onClick={() => setActualMovies(!showMovies)}
            className={showMovies
              ? 'personFilmography_button'
              : 'personFilmography_button_active personFilmography_button_active_right'}
          >
            {`${person.name}'s TV shows`}
          </button>) : null}
      </div>
      <PersonMovies />
    </div>);
}

PersonFilmography.propTypes = {
  person: PropTypes.instanceOf(Object),
  personMovie: PropTypes.instanceOf(Array),
  personTv: PropTypes.instanceOf(Array),
  setActualMovies: PropTypes.func.isRequired,
  showMovies: PropTypes.bool,
};

PersonFilmography.defaultProps = {
  person: null,
  personMovie: null,
  personTv: null,
  showMovies: null,
};

export default PersonFilmography;
