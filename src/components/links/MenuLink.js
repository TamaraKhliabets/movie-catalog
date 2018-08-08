import React  from 'react';
import { Link } from 'react-router-dom';


const MenuLink = ({ direction, children }) => (
    <Link to={`/${direction}`}>
        {children}
    </Link>
);



export default MenuLink;