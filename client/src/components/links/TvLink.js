import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cinema from '../../default/ScreenFlow.png';

function TvLink({ movie }) {
  const {
    id, name, vote_average, poster_path, overview, first_air_date,
  } = movie;
  const src = 'https://image.tmdb.org/t/p/w200'.concat(poster_path);
  const date = new Date(first_air_date).getFullYear();
  return (
    <div className="link_item">
      <Link to={`/tv/${id}`}>
        <img className="link_image" src={poster_path ? src : cinema} alt={name} />
        <div className="link_item_title">{name}</div>
        <div className="link_item_hover">
          <div className="link_item_vote">
            {`IMDb: ${vote_average}/10`}
            <span className="link_item_star">&#10025;</span>
          </div>
          {first_air_date ? (<div className="link_item_date">{`${date} YEAR`}</div>) : null}
          {overview ? <div className="link_item_overiew">{overview}</div> : null}
        </div>
      </Link>
    </div>
  );
}

TvLink.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

TvLink.defaultProps = {
  movie: null,
};

export default TvLink;
