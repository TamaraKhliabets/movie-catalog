import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TvLink from '../links/TvLink';

export default class UserTvs extends Component {
state = { start: 0, end: 20, visibleButtons: false };

componentWillReceiveProps(nextProps) {
  const { tvsFavorite } = this.props;
  if (tvsFavorite !== nextProps.tvsFavorite) {
    this.setState({ visibleButtons: true });
  }
}

render() {
  const { tvsFavorite } = this.props;
  const { start, end, visibleButtons } = this.state;

  if (!tvsFavorite) return <div className="loading" />;

  const actualMovies = tvsFavorite.map(el => (
    <div key={el.id} className="list_item">
      <TvLink movie={el} />
    </div>)).slice(start, end);
  const buttons = Array.from({ length: Math.ceil(tvsFavorite.length / 20) }, (el, i) => (
    <button
      key={i}
      type="button"
      onClick={(e) => {
        this.setState({ start: +e.target.value * 20, end: (+e.target.value + 1) * 20 });
      }}
      className={start / 20 === i ? 'page_button_item_active' : 'page_button_item'}
      value={i}
    >
      {i + 1}
    </button>));

  return (
    <div>
      <div className="list">
        { actualMovies }
      </div>
      {visibleButtons ? (
        <div className="btns_arrow">
          {buttons}
        </div>) : null}
    </div>);
}
}

UserTvs.propTypes = { tvsFavorite: PropTypes.instanceOf(Array) };

UserTvs.defaultProps = { tvsFavorite: null };
