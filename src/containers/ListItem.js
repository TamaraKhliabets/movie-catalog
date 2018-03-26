import React, { Component } from 'react';
import axios from "axios/index";
import {API_KEY} from "../constants";
import MovieList from "../components/MovieList";

export default class ListItem extends Component {
  state = {
    movies: {},
    genres: {}
  };

  loadFromServer = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => this.setState({movies: res.data}))
  };

  loadGenres = () => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then(res => this.setState({genres: res.data}))
  };

  componentDidMount() {
    this.loadFromServer();
    this.loadGenres();
  }

  render() {
    const {movies, genres} = this.state;

    return (
        <div>
          <MovieList movies={movies.results} genres={genres.genres}/>
        </div>
    );
  }
}
