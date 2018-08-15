import {connect} from 'react-redux';
import Req from "../requests/Req";

import {MENU_ITEMS} from '../../constants';

import {setDirection} from "../../actions/options";

const getCurrentDirection = direction => MENU_ITEMS.find(e => e.direction === direction).url;

const mapStateToProps = (state, ownProps) => ({
    url: getCurrentDirection(ownProps.direction)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: () => dispatch(setDirection(ownProps.direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(Req);