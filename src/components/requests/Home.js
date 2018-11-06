import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesFetchData } from '../../actions/movies';
import Carousel from '../home/Carousel';
import { API_KEY, URL } from '../../constants';

class Home extends Component {
  componentDidMount() {
    this.props.setMovies(`${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        {!movies ? <div className="loading" /> : <Carousel movies={movies} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  setMovies: url => dispatch(moviesFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
