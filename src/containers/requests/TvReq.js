import React, {Component} from 'react';
import axios from 'axios';
// import ListItem from "./ListItem";
import {API_KEY} from "../../constants";
// import Search from "../components/Search";
import Main from "../../components/Main";

export default class TvReq extends Component {
  state = {
    movies: null,
    page: 1
  };

  loadMovies = () => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${this.state.page}`)
      .then(res => this.setState({movies: res.data}))
  };

  setPage = (page) => {
    this.setState({page: this.state.page + page});
    console.log(this.state.page)
  };

  // searchMovie = (s) => {
  //   this.setState({
  //     search: s,
  //     url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.search}`
  //   });
  // };


  componentDidMount() {
    this.loadMovies()
  };

  componentWillUpdate(nextState) {
    if (nextState.page !== this.state.page) {
      // || nextState.search !== this.state.search) {
      this.loadMovies()
    }
  }

  render() {
    const {movies, page} = this.state;

    if (!movies) return <div className='loading'/>;

    return (
      <div className=''>
        <Main movies={movies.results}
              page={page}
              total={movies.total_pages}
              setNewPage={this.setPage}
              searchMovie={this.searchMovie}/>
      </div>
    )
  }
}