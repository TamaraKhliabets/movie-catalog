import React, {Component} from 'react';
import DataMovie from '../components/DataMovie';
import Crew from './Crew';
// import Video from './Video';
import axios from 'axios';
import {API_KEY} from "../constants";
import Similar from "../components/Similar";
import Video from "../components/Video";

export default class Item extends Component {
  state = {
    movie: null,
    credits: null
  };


  loadMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=videos,similar`)
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

    if (!movie) return <div>loading</div>;

    if (!credits) return <div>Loading</div>;

    return (
      <div>
        {/*{console.log(movie.similar.results)}*/}
          {/*{console.log(movie.videos.results)}*/}
        <DataMovie movie={movie}/>
        <Crew cast={credits.cast}/>
          <Video video={movie.videos.results}/>
        <Similar movies={movie.similar.results}/>
      </div>
    )
  }
}
