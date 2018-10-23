import React from 'react';
import Routes from './routes/Routes';
import Title from './header/Title';
import MenuButtons from '../containers/header/MenuButtons';
import GenreButtons from '../containers/header/GenreButtons';
import Search from '../containers/options/Search';
import Footer from './Footer';
// import User from "./auth/User";

const App = () => (
	<div className="app">
		<div className="title_container">
			<Title />
			<div className="menu">
				<MenuButtons />
				<GenreButtons />
			</div>
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
