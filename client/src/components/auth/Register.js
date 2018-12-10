import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

export default class Register extends Component {
  state = { duplicate: false, userName: '' };

  onUserSubmit = (user) => {
    this.setState({ userName: user.userName });
    axios.post('https://servercatalog.herokuapp.com/api/users', user)
        .then((res) => {
            if(!res.data.duplicate) alert('Try to login');
            this.setState({ duplicate: res.data.duplicate });
        })
        .catch(() => alert('Something went wrong!'));
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
