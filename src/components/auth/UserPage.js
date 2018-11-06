import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY, URL } from '../../constants';

export default class UserPage extends Component {
  state = {
  	token: null,
  };

  auth = () => {
  	axios.get(`${URL}/authentication/token/new?api_key=${API_KEY}`)
  		.then(res => this.setState({
  			token: res.data.request_token,
  		}));
  };

  handleLogin = () => {
  	console.log(this.state.token);
  	axios.get(`https://www.themoviedb.org/authenticate/${this.state.token}?redirect_to=http://localhost:3000`,
  		{
  			headers: {
  			'Access-Control-Allow-Origin': '*',
  			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  			'Access-Control-Allow-Headers': 'Content-Type',
  		},
  		});
  };

  handleRegister = () => {
  	// console.log(this.state.token);
  	// axios.get(`https://www.themoviedb.org/authenticate/${this.state.token}?redirect_to=https://www.themoviedb.org/account/signup/approved`)
  };

  componentDidMount() {
  	this.auth();
  }

  render() {
  	return (
	<div className="user_log">
		<button onClick={this.handleLogin}>Login</button>
		<button onClick={this.handleRegister}>Register</button>
	</div>
  	);
  }
}
