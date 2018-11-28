import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
      loginName: '',
      password: '',
      isCorrect: true,
    };

    componentWillReceiveProps(nextProps) {
      const { userName } = this.props;
      if (userName !== nextProps.userName) this.setState({ isCorrect: userName });
    }

    userSubmit = (e) => {
      e.preventDefault();
      const { loginName, password } = this.state;
      const { onSubmit } = this.props;
      if (!loginName || !password) return;
      onSubmit({ loginName, password });
      this.setState({ loginName: '', password: '' });
    };

    render() {
      const { isCorrect, loginName, password } = this.state;
      return (
        <form onSubmit={this.userSubmit} className="user_form">
          <div className={isCorrect ? 'user_auth_true' : 'user_auth_false'}>Incorrect username or password.</div>
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={loginName}
            className="user_log_form_inp"
            onChange={e => this.setState({ loginName: e.target.value })}
          />
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            value={password}
            className="user_log_form_inp"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="submit"
            className="user_log_form_submit"
            value="SIGN IN"
          />
        </form>);
    }
}

LoginForm.propTypes = {
  userName: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  userName: null,
};
