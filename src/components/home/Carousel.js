import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Carousel({ movies }) {
  const labels = movies.map((l, i) => {
    const src = 'https://image.tmdb.org/t/p/original'.concat(l.backdrop_path);
    return (
      <div key={l.id} className={`carousel_item carousel_item_${i}`} id={`.carousel_item_${i}`}>
        <img className="carousel_image" src={src} alt={l.title} />
        <div className="carousel_name">
          <Link to={`/movie/${l.id}`}>
            <div className="">{l.title}</div>
            <div className="carousel_overview">{l.overview}</div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="carousel_wrapper">
      {labels}
    </div>
  );
}

Carousel.propTypes = {
  movies: PropTypes.instanceOf(Array),
};

Carousel.defaultProps = {
  movies: [],
};

export default Carousel;
