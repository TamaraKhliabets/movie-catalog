import React, { Component } from 'react';
import { API_KEY, URL } from '../../constants';
import PersonData from '../../containers/person/PersonData';
import PersonFilmpgraphy from '../../containers/person/PersonFilmography';

export default class PersonReq extends Component {
	componentDidMount() {
		const { personFetchData, url } = this.props;
		personFetchData(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=movie_credits,tv_credits'}`);
	}

	render() {
		const { person } = this.props;

		if (!person) return <div className="loading" />;

		return (
			<div>
				<PersonData />
				<PersonFilmpgraphy />
			</div>
		);
	}
}
