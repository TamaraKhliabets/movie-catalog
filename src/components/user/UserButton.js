import React, { Component } from 'react';
import user from '../../default/user (1).png';
import UserInfo from '../../containers/user/UserInfo';

export default class UserButton extends Component {
state = { isVisible: false };

render() {
  const { isVisible } = this.state;
  return (
    <div className="user_logout">
      <button
        className="user_btn"
        type="button"
        onClick={() => this.setState({ isVisible: !isVisible })}
      >
        <img src={user} alt="user" />
      </button>
      { isVisible ? <UserInfo /> : null }
    </div>);
}
}
