import React from 'react';
import PropTypes from 'prop-types';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) return <div className="null" />;
  const nodeReviews = reviews.map(e => (
    <div className="review" key={e.id}>
      <div className="review_author">
        {`${e.author}:`}
      </div>
      <div className="review_content">{e.content}</div>
    </div>
  ));
  return (
    <div>
      <div className="subtitle">Reviews &#8250;</div>
      {nodeReviews}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.instanceOf(Array),
};

Reviews.defaultProps = {
  reviews: null,
};

export default Reviews;
