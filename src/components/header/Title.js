import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <button
      type="button"
      className="title"
      onClick={() => {
        props.setDirection('/');
        props.setPage(1);
        props.setOption('language=en-US');
        props.changePage('/');
      }}
    >
      {'What to watch???'}
    </button>
  );
}

Title.propTypes = {
  setDirection: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};


export default Title;
