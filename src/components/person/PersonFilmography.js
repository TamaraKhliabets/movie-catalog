import React, { Component } from 'react';
import PersonMovies from '../../containers/person/PersonMovies';

export default class PersonFilmography extends Component {
  render() {
    const { person, personMovie, personTv, setActualMovies, showMovies } = this.props;

    if (!personMovie || !personTv) return <div className="loading" />;

    return (
			<div>
					<div className="personFilmography">
							{
									personMovie.length ? (
													<button onClick={() => setActualMovies(!showMovies)}
																	className={showMovies ?
																			'personFilmography_button_active personFilmography_button_active_left' :
																			"personFilmography_button"}>
															{`${person.name}'s movies`}
													</button>
											)
											: null}
							{
									personTv.length	? (
													<button onClick={() => setActualMovies(!showMovies)}
																	className={showMovies ?
																			"personFilmography_button" :
																			'personFilmography_button_active personFilmography_button_active_right'}>
															{`${person.name}'s TV shows`}
													</button>
											)
											: null}
					</div>
				<PersonMovies />
			</div>
    );
  }
}
