import React, {Component} from 'react';
import DataMovie from '../components/DataMovie';
import Crew from './Crew';
// import Video from './Video';
import axios from 'axios';
import {API_KEY} from "../constants";

export default class Item extends Component {
  state = {
    movie: {},
    credits: {}
  };


  loadMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}`)
      .then(res => this.setState({movie: res.data}))
  };

  loadCredits = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${API_KEY}`)
      .then(res => this.setState({credits: res.data}))
  };

  componentDidMount() {
    this.loadMovie();
    this.loadCredits();
  }

  render() {
    const {movie, credits} = this.state;

    return (
      <div>
        {(Object.keys(movie).length && Object.keys(credits).length) ?
          <div>
            <DataMovie movie={movie}/>
            <Crew cast={credits.cast}/>
          </div>
          : null
        }
        {/*<Video/>*/}
      </div>
    )
  }
}
