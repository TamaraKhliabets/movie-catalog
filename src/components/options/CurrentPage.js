import {connect} from 'react-redux';
import Req from "../requests/Req";

import {PATH} from '../../constants';

import {setDirection} from "../../actions/options";
import {moviesFetchData} from "../../actions/movies";

const getCurrentDirection = direction => PATH.find(e => e.direction === direction).url;

const mapStateToProps = (state, ownProps) => ({
    url: getCurrentDirection(ownProps.direction),
    option: state.option,
    page: state.page,
    movies: state.movies,
    hasError: state.hasError,
    isLoading: state.isLoading

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => dispatch(setDirection(ownProps.direction)),
    fetchMovies: url => dispatch(moviesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);