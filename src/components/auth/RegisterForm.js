import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
  state = {
    userName: '',
    password: '',
    checkedPassword: '',
    isCorrectPwd: false,
    isVisibleMessege: false,
    isEmptyFields: false,
    isMatchPwds: true,
  };

  handleChangeUsername = e => this.setState({ userName: e.target.value });

  handleSetPassword = (e) => {
    const validator = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9]{${8},}$`);
    const { isCorrectPwd } = this.state;
    this.setState({
      isCorrectPwd: validator.test(e.target.value),
      isVisibleMessege: true,
      password: e.target.value,
    });
    if (isCorrectPwd) { this.setState({ isVisibleMessege: false }); }
  };

  handleConfirmPassword = (e) => {
    const { password } = this.state;
    this.setState({ checkedPassword: e.target.value, isMatchPwds: false });
    if (password === e.target.value) {
      this.setState({ isMatchPwds: true });
    } else {
      this.setState({ isMatchPwds: false });
    }
  };

  userSubmit = (e) => {
    e.preventDefault();
    const {
      isCorrectPwd, password, isMatchPwds, isEmptyFields,
    } = this.state;
    let { userName } = this.state;
    const { onSubmit } = this.props;
    userName = userName.trim();
    if (!userName || !password) {
      this.setState({ isEmptyFields: !isEmptyFields });
      return;
    }
    if (!isCorrectPwd || !isMatchPwds) return;
    onSubmit({ userName, password });
    this.setState({
      userName: '',
      password: '',
      checkedPassword: '',
      isCorrectPwd: false,
      isVisibleMessege: false,
      isEmptyFields: false,
      isMatchPwds: true,
    });
  };

  render() {
    const {
      userName,
      password,
      checkedPassword,
      isCorrectPwd,
      isVisibleMessege,
      isMatchPwds,
      isEmptyFields,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.userSubmit} className="user_form">
          <input
            type="text"
            name="user"
            placeholder="Username"
            className={isEmptyFields ? 'user_log_form_inp_err' : 'user_log_form_inp'}
            value={userName}
            onChange={this.handleChangeUsername}
          />
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            className={isEmptyFields ? 'user_log_form_inp_err' : 'user_log_form_inp'}
            value={password}
            onChange={this.handleSetPassword}
          />
          <input
            type="password"
            name="checkedPwd"
            placeholder="Confirm password"
            className={isEmptyFields ? 'user_log_form_inp_err' : 'user_log_form_inp'}
            value={checkedPassword}
            onChange={this.handleConfirmPassword}
          />
          <div className="user_lof_form_hint">
            {'Make sure it\'s more than 8 characters, including a number, a uppercase and a lowercase letter.'}
          </div>
          {!isCorrectPwd && isVisibleMessege ? <div className="user_lof_form_hint">*Invalid password</div> : null}
          { !isMatchPwds ? <div className="user_lof_form_hint">{'Passwords don\'t match'}</div> : null}
          <input
            type="submit"
            className="user_log_form_submit"
            value="SIGN UP"
          />
        </form>
      </div>);
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
