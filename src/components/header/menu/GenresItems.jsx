import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_KEY, URL } from '../../../constants';

export default class GenresItems extends Component {
  componentDidMount() {
    this.props.genresFetchData(`${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  }

	setGenre = (e) => {
	  const { setGenre, setDirection, changePage, setOption, setPage } = this.props;
	  const genre = e.target.value;
	  setDirection('/genres?');
	  setGenre(genre);
	  setOption(`language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=${genre.split('_')[1]}`);
	  setPage(1);
	  changePage(`/genres?genre=${genre.split('_')[0]}`);
	};

	render() {
	  const { genres } = this.props;

	  if (!genres) return <div className="loading" />;

	  const genresLink = genres.map((genre) => {
	    const { id, name } = genre;
	    return (
		<div key={id} className="sidebar_item">
			<button type="button" onClick={this.setGenre} value={`${name}_${id}`.toLowerCase()}>
				{name}
			</button>
		</div>
	    );
	  });

	  return (
				<div className="menu_item">
					<div className="menu_item_sidebar">
						<div className="menu_item_name">Genres</div>
						<div className="sidebar">
							{genresLink}
						</div>
					</div>
				</div>
	  );
	}
}

GenresItems.propTypes = {
  genresFetchData: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  genres: PropTypes.array,
};

GenresItems.defaultProps = {
  genres: [],
};
