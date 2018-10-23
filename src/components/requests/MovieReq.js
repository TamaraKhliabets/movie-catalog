import React, { Component } from 'react';
import { API_KEY, URL } from '../../constants';
import ListItem from '../../containers/pages/ListItem';
import Page from '../../containers/buttons/Page';
import Filter from '../../containers/buttons/Filter';


export default class MovieReq extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			const { url, option, page, moviesFetchData } = this.props;
			moviesFetchData(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
		}
	}

	componentDidMount() {
		const { url, option, page, moviesFetchData } = this.props;
		moviesFetchData(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
	}

	render() {
		const { movies, hasError, isLoading } = this.props;

		if (hasError) return <div>Error</div>;

		if (isLoading || !movies) return <div className="loading" />;

		return (
			<div>
				<Filter />
				<ListItem />
				<Page />
			</div>
		);
	}
}
