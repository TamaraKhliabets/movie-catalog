import React from 'react';
import PersonsPage from './PersonsPage';
import MoviePage from './MoviePage';
import UserMovies from '../user/UserMovies';
import UserTvs from '../user/UserTvs';

const choosePage = (direction) => {
  switch (direction) {
    case 'person':
      return <PersonsPage direction={direction} />;
    case 'favoriteMovie':
      return <UserMovies />;
    case 'favoriteTv':
      return <UserTvs />;
    default:
      return <MoviePage direction={direction} />;
  }
};

const Page = ({ match: { params } }) => choosePage(params.direction);

export default Page;
