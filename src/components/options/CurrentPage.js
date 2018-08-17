import {connect} from 'react-redux';
import Req from "../requests/Req";

import {PATH} from '../../constants';

import {setDirection, setCurrentPage} from "../../actions/options";

const getCurrentDirection = direction => PATH.find(e => e.direction === direction).url;

const get = page => console.log(page);

const mapStateToProps = (state, ownProps) => ({
    url: getCurrentDirection(ownProps.direction)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => dispatch(setDirection(ownProps.direction)),
    onSetPage: () => dispatch(setCurrentPage(ownProps.page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);