import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY} from "../constants";
import PersonData from "../components/PersonData";
import PersonMovies from "../components/PersonMovies";

export default class Person extends Component {
  state = {
    person: {},
    movies: {}
  };

  loadPerson = () => {
    axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=${API_KEY}`)
      .then(res => this.setState({person: res.data}))
  };

  loadMovie = () => {
    axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.id}/combined_credits?api_key=${API_KEY}`)
      .then(res => this.setState({movies: res.data }))
  };

  componentDidMount() {
    this.loadPerson();
    this.loadMovie();
  };

  render() {
    const {person, movies} = this.state;

    return (
      <div>
        {(Object.keys(person).length && Object.keys(movies).length) ?
          <div>
            <PersonData person={person}/>
            <PersonMovies movies={movies}/>
          </div>:
          'Loading'}
      </div>
    )
  }
}