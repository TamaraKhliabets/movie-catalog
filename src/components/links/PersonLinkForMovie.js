import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cinema from '../../default/ninja.png';

function PersonLinkForMovie({ actor }) {
  const {
    id, profile_path, name, character,
  } = actor;
  const src = 'https://image.tmdb.org/t/p/w154'.concat(profile_path);
  return (
    <div className="person_Link">
      <Link to={`/person/${id}`}>
        <img className="person_link_image" src={profile_path ? src : cinema} alt={name} />
        <div className="link_item_title">{name}</div>
        <div className="character">{character}</div>
      </Link>
    </div>
  );
}

PersonLinkForMovie.propTypes = {
  actor: PropTypes.instanceOf(Object),
};

PersonLinkForMovie.defaultProps = {
  actor: null,
};

export default PersonLinkForMovie;
