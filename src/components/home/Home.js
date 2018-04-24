import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Carousel from './Carousel';
import {API_KEY} from "../../constants";

export default class Home extends Component{
  state = {
    movies: null,
    tvs: null,
    persons: null
  };


  loadTopMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => this.setState({movies: res.data}))
  };

  loadTopTv = () => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => this.setState({tvs: res.data}))
  };

  loadTopPeople = () => {
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => this.setState({persons: res.data}))
  };

  componentDidMount() {
    this.loadTopMovies();
    this.loadTopTv();
    this.loadTopPeople();
  }

  render() {
    const {movies,tvs, persons} = this.state;

    if(!movies) return <div className='loading'/>;
    if(!tvs) return <div className='loading'/>;
    if(!persons) return <div className='loading'/>;

    return (
      <div className='home_carousel'>
          <Carousel units={movies.results}/>
        <div className='link_carousel'>
          <Link to={`/movies`}>Movies</Link>
          <Link to={`/tv`}>TV Show</Link>
          <Link to={`/persons`}>Filmography</Link>
        </div>
      </div>
    )
  }
}