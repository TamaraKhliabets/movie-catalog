import React, { Component } from 'react';
import MenuButtons from '../../containers/header/MenuButtons';
import GenreButtons from '../../containers/header/GenreButtons';
import menu from '../../default/menu.png';

export default class Menu extends Component {
		state = {
		  isMobile: true,
		};

		componentDidMount() {
		  window.addEventListener('resize', this.defineSize);
		}

		componentWillUnmount() {
		  window.removeEventListener('resize', this.defineSize);
		}

		defineSize = () => {
		  this.setState({
		    isMobile: window.innerWidth < 769,
		  });
		};

		changeVisibleMenu = () => {
		  this.setState({
		    isMobile: !this.state.isMobile,
		  });
		};

		render() {
		  const { isMobile } = this.state;

		  return (
			<div className="menu">
				<button type="button" className="menu_button" onClick={this.changeVisibleMenu}>
					<img src={menu} />
				</button>
				{
						!isMobile
						  ? (
							<div className="menu_main">
								<MenuButtons />
								<GenreButtons />
							</div>
						  ) : null
					}
			</div>
		  );
		}
}
