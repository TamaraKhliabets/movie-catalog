import React, { Component } from 'react';
import Login from '../../containers/auth/Login';
import Register from './Register';

export default class UserPage extends Component {
  state = { isVisible: true };

  changeVisible = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="user_log">
        <div className="user_log_btns">
          <input
            type="button"
            className="user_log_btn"
            onClick={this.changeVisible}
            value="Sign in"
          />
          <input
            type="button"
            className="user_log_btn"
            onClick={this.changeVisible}
            value="Sign up"
          />
        </div>
        <div className="user_log_form">
          {isVisible ? <Login /> : <Register />}
        </div>
      </div>);
  }
}
