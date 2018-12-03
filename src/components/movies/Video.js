import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Video extends Component {
  state = { keyIndex: 0 };

  setKey = e => this.setState({ keyIndex: +e.target.value });

  render() {
    const { video } = this.props;
    const { keyIndex } = this.state;

    if (!video || !video.length) return <div className="null" />;

    const videos = video.map((e, i) => (
      <button
        key={e.id}
        id={i}
        value={i}
        type="button"
        className={(keyIndex === i) ? 'button_video_active' : 'button_video'}
        onClick={this.setKey}
      >
        {e.name}
      </button>)).slice(0, 3);

    return (
      <div className="video">
        <div className="video_buttons">
          {videos}
        </div>
        <div className="video_youtube">
          {video[keyIndex].site.toLowerCase() === 'youtube'
            ? (<iframe
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen="1"
              title={video[keyIndex].name}
              src={`https://www.youtube.com/embed/${video[keyIndex].key}`}
            />
            ) : null}
        </div>
      </div>);
  }
}


Video.propTypes = {
  video: PropTypes.instanceOf(Array),
};

Video.defaultProps = {
  video: null,
};
