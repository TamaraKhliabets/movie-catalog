import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

export default class Register extends Component {
  state = { duplicate: false, userName: '' };

  onUserSubmit = (user) => {
    this.setState({ userName: user.userName });
    axios.post('http://localhost:3001/movie/users', user).then((res) => {
      this.setState({ duplicate: res.data.duplicate });
    });
  };

  render() {
    const { duplicate, userName } = this.state;

    return (
      <div>
        <div className={duplicate ? 'user_dublicate_true' : 'user_dublicat_false'}>{`Username "${userName}" is already taken`}</div>
        <RegisterForm onSubmit={this.onUserSubmit} />
      </div>);
  }
}
