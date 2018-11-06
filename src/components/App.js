import React from 'react';
import Routes from './routes/Routes';
import Title from '../containers/header/Title';
import Menu from './header/Menu';
import Search from '../containers/options/Search';
import Footer from './Footer';

// import User from "./auth/User";

import '../styles.css';

const App = () => (
	<div className="app">
		<div className="title_container">
			<Title />
			<Menu />
			<Search />
			{/* <User/> */}
		</div>
		<div className="main_container">
			<Routes />
		</div>
		<Footer />
	</div>
);

export default App;
