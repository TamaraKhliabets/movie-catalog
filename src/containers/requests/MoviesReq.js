import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY} from "../../constants";
import Main from "../../components/Main";
import Button from "../../components/sort/Button";
import Search from "../../components/Search";

export default class MoviesReq extends Component {
    state = {
        url: 'https://api.themoviedb.org/3/movie/popular',
        options: 'language=en-US',
        movies: null,
        page: 1,
        sortValue: null
    };

    loadMovies = () => {
        let {url, options, page} = this.state;
        axios.get(`${url}?api_key=${API_KEY}&${options}&page=${page}`)
            .then(res => this.setState({movies: res.data}))
    };

    searchMovie = (search) => {
      this.setState({
          url: 'https://api.themoviedb.org/3/search/movie',
          options: `language=en-US&query=${search}&include_adult=false`
      });
    };

    sortMovie = (sorting) => {
        let today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
        this.setState({
            url: `https://api.themoviedb.org/3/discover/movie`,
            options: `language=en-US&sort_by=${sorting}&include_adult=false&include_video=false&release_date.lte=${today}`
        })
    };

    setPage = (page) => {
        this.setState({page: this.state.page + page});
        console.log(this.state.page)
    };

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
                <Button sortMovie={this.sortMovie}/>
                <Search searchMovie={this.searchMovie}/>
                <Main movies={movies.results}
                      page={page}
                      total={movies.total_pages}
                      setNewPage={this.setPage}/>
            </div>
        )
    }
}