import React from 'react';
import {connect} from 'react-redux';
import {changePage, setDirection} from "../../actions/options";

const MenuLink = ({direction, children}) => (
    <input onClick={e => setDirection.bind(this, e.target.value)} value={direction}>
        {children}
    </input>
);

const mapDispatchToProps = {
    setDirection,
    changePage
};


export default connect(null, mapDispatchToProps)(MenuLink);