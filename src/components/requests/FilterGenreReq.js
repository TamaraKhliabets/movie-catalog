import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import ButtonSort from './../buttons/ButtonSort';
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
import Choice from "../options/Choice";

export default class FilterGenreReq extends Component {
    state = {
        url: `${URL}/discover/movie`,
        options: 'language=en-US&include_adult=false&include_video=false',
        sortValue: 'popularity.desc',
        page: 1,
        today: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        movies: null
    };

    loadMovies = () => {
        let {url, page, sortValue, options, today} = this.state;
        axios.get(`${url}?api_key=${API_KEY}&${options}&sort_by=${sortValue}&page=${page}&with_genres=${this.props.match.params.id}&release_date.lte=${today}`)
            .then(res => this.setState({movies: res.data}))
    };

    sortMovie = (sorting) => {
        this.setState({
            sortValue: `${sorting}`
        })
    };

    setPage = (page) => {
        this.setState({page: this.state.page + page});
    };

    setUrl = (url) => {
        this.setState({url: `${URL}/discover/${url}`})
    };


    componentDidMount() {
        this.loadMovies();
    };

    componentWillUpdate(nextState) {
        if (nextState.page !== this.state.page) {
            this.loadMovies()
        }
    }

    render() {
        const {movies, page} = this.state;

        if (!movies) return <div className='loading'/>;

        return (
            <div>
                <div>
                    <ButtonSort sortMovie={this.sortMovie}/>
                    <Choice setUrl={this.setUrl}/>
                </div>
                <ListItem movies={movies.results}/>
                <ButtonPage page={page}
                            total={movies.total_pages}
                            setNewPage={this.setPage}/>
            </div>
        )
    }
}