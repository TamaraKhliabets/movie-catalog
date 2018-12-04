import React from 'react';
import PropTypes from 'prop-types';
import MovieLink from '../links/MovieLink';
import TvLink from '../links/TvLink';

function Similar({ similar, direction }) {
  if (!similar || !similar.length) return <div className="null" />;
  const shortLost = similar.slice(0, 4);
  const nodeItems = shortLost.map((e) => {
    if (direction === 'movie?' || direction === 'favoriteMovie?') {
      return (
        <div key={e.id} className="list_item">
          <MovieLink movie={e} />
        </div>
      );
    }
    return (
      <div key={e.id} className="list_item">
        <TvLink movie={e} />
      </div>
    );
  });
  return (
    <div>
      <div className="subtitle">Similar movies &#8250;</div>
      <div className="list">
        {nodeItems}
      </div>
    </div>
  );
}

Similar.propTypes = {
  similar: PropTypes.instanceOf(Array),
  direction: PropTypes.string,
};

Similar.defaultProps = {
  similar: null,
  direction: '',
};

export default Similar;
