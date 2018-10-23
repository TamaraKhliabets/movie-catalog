import React from 'react';
import PersonsPage from './PersonsPage';
import MoviePage from './MoviePage';

const Page = ({ match: { params } }) => ((params.direction === 'person')
	? <PersonsPage direction={params.direction} />
	: <MoviePage direction={params.direction} />);

export default Page;
