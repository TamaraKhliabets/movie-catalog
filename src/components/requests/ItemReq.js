import React, { Component } from 'react';
import { API_KEY, URL } from '../../constants';
import DataMovie from '../../containers/movies/DataMovie';
import Cast from '../../containers/movies/Cast';
import Video from '../../containers/movies/Video';
import Similar from '../../containers/movies/Similar';
import Reviews from '../../containers/movies/Reviews';

export default class ItemReq extends Component {
	componentDidMount() {
		const { url, movieFetchData } = this.props;
		movieFetchData(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=videos,similar,credits,reviews'}`);
	}

	render() {
		return (
			<div>
				<DataMovie />
				<Cast />
				<Video />
				<Similar />
				<Reviews />
			</div>
		);
	}
}
