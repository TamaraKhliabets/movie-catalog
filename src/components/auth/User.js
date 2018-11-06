import React, { Component } from 'react';
import user from '../../default/user (1).png';
import UserPage from './UserPage';

export default class User extends Component {
    state = {
    	isVisible: false,
    };

    showInfo = () => {
    	this.setState({
    		isVisible: !this.state.isVisible,
    	});
    };

    render() {
    	const { isVisible } = this.state;

    	return (
	<div className="user">
		<button className="user_btn" onClick={this.showInfo}>
			<img src={user} />
		</button>
		{ isVisible ? <UserPage /> : null }
	</div>
    	);
    }
}
