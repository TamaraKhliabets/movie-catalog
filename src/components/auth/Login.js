import React, { Component } from 'react';

// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    const { userName, login } = this.props;
    return (
      <div>
        <LoginForm userName={userName} onSubmit={user => login(user)} />
      </div>);
  }
}

Login.propTypes = {
  userName: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

Login.defaultProps = {
  userName: '',
};
