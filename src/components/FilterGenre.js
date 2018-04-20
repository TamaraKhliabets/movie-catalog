import React, {Component} from 'react';
import axios from 'axios';
import ListItem from "../containers/ListItem";
import {API_KEY} from "../constants";

export default class FilterGenre extends Component {
  state = {
    movies: null,
    page: 1
  };

  loadMovies = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_genres=${this.props.match.params.id}`)
      .then(res => this.setState({movies: res.data}))
  };

  setPage = (page) => {
    this.setState({page: this.state.page + page});
  };

  componentDidMount() {
    this.loadMovies();
  };

  componentWillUpdate(nextState) {
    if(nextState.page !== this.state.page) {
      this.loadMovies()
    }
  }

  render() {
    const {movies, page} = this.state;

    if(!movies) return <div>Loading</div>;

    return (
      <div>
        <ListItem movies={movies.results}
                  page={page}
                  total={movies.total_pages}
                  setNewPage={this.setPage}/>
      </div>
    )
  }
}