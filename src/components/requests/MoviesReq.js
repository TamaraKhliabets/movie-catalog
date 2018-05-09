import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import ButtonFilter from '../buttons/ButtonFilter';
import Search from './../options/Search';
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';

export default class MoviesReq extends Component {
    state = {
        url: `${URL}${this.props.match.url}/popular`,
        options: 'language=en-US',
        page: 1,
        movies: null,
        isVisible: true
    };

    loadMovies = () => {
        let {url, options, page} = this.state;
        axios.get(`${url}?api_key=${API_KEY}&${options}&page=${page}`)
            .then(res => this.setState({movies: res.data}))
    };

    searchMovie = (search) => {
        search ?
            this.setState({
                url: `${URL}/search${this.props.match.url}`,
                options: `language=en-US&query=${search}&include_adult=false`
            }) :
            this.setState({
                url: `${URL}${this.props.match.url}/popular`,
                options: 'language=en-US'
            });
    };

    sortMovie = (sortBy, year) => {
        let {page} = this.state;
        let today = new Date().getFullYear();
        let options = year ?
            `language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&primary_release_year=${year}&page=${page}` :
            `language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&year=${today}&page=${page}`;
        this.setState({
            url: `${URL}/discover${this.props.match.url}`,
            options: options
        });
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
            this.loadMovies()
        }
    }

    render() {
        const {movies, page} = this.state;

        if (!movies) return <div className='loading'/>;

        return (
            <div>
                <div>
                    <ButtonFilter sortMovie={this.sortMovie}/>
                    {/*<Search searchMovie={this.searchMovie}/>*/}
                </div>
                <ListItem movies={movies.results}/>
                <ButtonPage page={page}
                            total={movies.total_pages}
                            setNewPage={this.setPage}/>
            </div>
        )
    }
}