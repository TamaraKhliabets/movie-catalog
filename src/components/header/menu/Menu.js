import React from 'react';
import {MENU_ITEMS} from "../../../constants";

const Menu = props => {
    let menu = MENU_ITEMS.map(item => {
        return (
            <button key={item.id}
                    onClick={() => {
                        props.setDirection(`${item.direction}?`);
                        props.setPage(1);
                        props.setOption('language=en-US');
                        props.changePage(`/${item.direction}`)
                    }}
                    className='menu_item menu_item_name'>
                {item.name}
            </button>
        )
    });

    return (
        <div className='menu'>
            {menu}
        </div>
    )
};

export default Menu;