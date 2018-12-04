import React from 'react';
import PropTypes from 'prop-types';
import { MENU_ITEMS } from '../../../constants';

function Menu(props) {
  const menu = MENU_ITEMS.map(item => (
    <button
      type="button"
      key={item.id}
      onClick={() => {
        props.setDirection(`${item.direction}?`);
        props.setPage(1);
        props.setOption('language=en-US');
        props.changePage(`/${item.direction}`);
      }}
      className="menu_item menu_item_name"
    >
      {item.name}
    </button>
  ));

  return (
    <div className="menu_main_items">
      {menu}
    </div>
  );
}

Menu.propTypes = {
  setDirection: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Menu;
