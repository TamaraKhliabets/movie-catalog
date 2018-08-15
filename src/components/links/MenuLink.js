import React from 'react';
import {Link} from 'react-router-dom';

const MenuLink = ({direction, children}) => (
    <Link to={`/${direction}?page=1`}>
        {children}
    </Link>
);

export default MenuLink;