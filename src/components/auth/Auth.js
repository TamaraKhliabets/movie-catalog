import React, { Component } from 'react';
import user from '../../default/user (1).png';
import UserPage from './UserPage';

export default class Auth extends Component {
  state = { isVisible: false };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="user">
        <button
          type="button"
          className="user_btn"
          onClick={() => this.setState({ isVisible: !isVisible })}
        >
          <img src={user} alt="user" />
        </button>
        {isVisible ? <UserPage /> : null}
      </div>);
  }
}
