import React from 'react';

import {MENU_ITEMS} from "../../../constants";
import Genres from "./Genres";
import MenuLink from '../../links/MenuLink';

const Menu = () => {
    let menu = MENU_ITEMS.map((item) => {
        return (
            <div key={item.id} className='menu_item'>
                <MenuLink direction={item.direction}>
                    <span role="img" aria-label="icon" className='menu_item_icon'>{item.icon}</span>
                    <div className='menu_item_name'>{item.name}</div>
                </MenuLink>
            </div>
        )
    });

    return (
        <div className='menu'>
            {menu}
            <Genres/>
        </div>
    )
};

export default Menu;