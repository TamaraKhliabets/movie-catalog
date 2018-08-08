import React, {Component} from 'react';
import { connect } from 'react-redux';
import { moviesFetchData } from "../../actions/movies";
import {API_KEY, URL} from "../../constants";
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
// import ButtonFilter from "../buttons/ButtonFilter";

class Req extends Component{
    componentDidUpdate(prevProps) {
        if(prevProps.url !== this.props.url) {
            this.props.fetchMovies(`${URL}${this.props.url}?api_key=${API_KEY}&${this.props.option}&page=1`);
            this.props.onLoad();
        }
    }

    componentDidMount() {
        this.props.fetchMovies(`${URL}${this.props.url}?api_key=${API_KEY}&${this.props.option}&page=1`);
        this.props.onLoad();
    }

    render() {
        // const {movies, hasError, isLoading} = this.props;
        //
        // if (hasError || isLoading || !movies) return <div className='loading'/>;

        return (
            <div>
                {console.log(this.props.total_pages)}

                {/*<ButtonFilter {...this.props}/>*/}
                {/*<ListItem/>*/}
                <ButtonPage/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    hasError: state.moviesHasError,
    isLoading: state.moviesIsLoading,
    option: state.option
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (url) => dispatch(moviesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);