import {connect} from 'react-redux';
import Req from "../requests/Req";

import {PATH} from '../../constants';

import {setDirection} from "../../actions/options";
import {moviesFetchData} from "../../actions/movies";

const getCurrentDirection = direction => PATH.find(e => e.direction === direction).url;

const mapStateToProps = ({option, page, movies, hasError, isLoading}, ownProps) => ({
    url: getCurrentDirection(ownProps.direction),
    option,
    page,
    movies,
    hasError,
    isLoading

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => dispatch(setDirection(ownProps.direction)),
    fetchMovies: url => dispatch(moviesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);