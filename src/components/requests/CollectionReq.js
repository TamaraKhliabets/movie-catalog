import React, { Component } from 'react';
import { API_KEY, URL } from '../../constants';
import cinema from '../../default/oscar.png';
import MovieLink from '../links/MovieLink';

export default class CollectionReq extends Component {
	componentDidMount() {
		const { url, collectionFetchData } = this.props;
		collectionFetchData(`${URL}${url}?api_key=${API_KEY}&language=en-US`);
	}

	render() {
		const { collection } = this.props;

		if (!collection) return null;

		const { name, overview, poster_path, parts } = collection;
		const src = 'https://image.tmdb.org/t/p/w342'.concat(poster_path);

		const nodeItem = parts.map(e => (
			<div key={e.id} className="list_item">
				<MovieLink movie={e} />
			</div>
		));


		return (
			<div>
				<div className="item_description">
					<img src={poster_path ? src : cinema} alt={name} />
					<table className="item_info">
						<caption className="item_title">{name}</caption>
						<tbody>
							{
								overview
									? (
										<tr>
											<td>Overview:</td>
											<td>{overview}</td>
										</tr>
									)
									: null
							}
						</tbody>
					</table>
				</div>
				<div className="list">
					{nodeItem}
				</div>
			</div>
		);
	}
}
