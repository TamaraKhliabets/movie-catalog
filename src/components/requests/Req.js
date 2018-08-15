import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesFetchData} from "../../actions/movies";
import {setCurrentPage} from "../../actions/options";
import {API_KEY, URL} from "../../constants";
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
import ButtonFilter from "../buttons/ButtonFilter";


class Req extends Component {
    componentDidUpdate(prevProps) {
        const {url, option, page} = this.props;
        if (prevProps.url !== url) {
            this.props.setPage(1);
            this.props.fetchMovies(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
            this.props.onLoad();
        } else if (prevProps.page !== page) {
            this.props.fetchMovies(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
            this.props.onLoad();
        }
    }

    componentDidMount() {
        const {url, option, page} = this.props;
        this.props.fetchMovies(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
        this.props.onLoad();
    }

    render() {
        const {movies, hasError, isLoading} = this.props;

        if (hasError || isLoading || !movies) return <div className='loading'/>;

        return (
            <div>
                <ButtonFilter/>
                <ListItem/>
                <ButtonPage/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    hasError: state.moviesHasError,
    isLoading: state.moviesIsLoading,
    direction: state.direction,
    option: state.option,
    page: state.page
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: url => dispatch(moviesFetchData(url)),
    setPage: page => dispatch(setCurrentPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);