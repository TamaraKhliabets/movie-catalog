import React from 'react';
import CurrentItemPage from './CurrentItemPage';
import CurrentPersonPage from './CurrentPersonPage';
import CurrentCollectionPage from './CurrentCollectionPage';

const ItemPage = ({ match: { params } }) => {
  const { direction, id } = params;
  switch (direction) {
    case 'person':
      return <CurrentPersonPage direction={direction} id={id} />;
    case 'collection':
      return <CurrentCollectionPage direction={direction} id={id} />;
    default:
      return <CurrentItemPage direction={direction} id={id} />;
  }
};

export default ItemPage;
