import React, {Component} from 'react';
import Routes from './routes/Routes';
import Title from "./header/Title";
import Menu from './header/menu/Menu';
import Footer from './Footer';
import Search from "./options/Search";

export default class App extends Component {

    render() {
        return (
            <div className='app'>
                <div className='title_container'>
                    <Title/>
                    <Menu/>
                    <Search/>
                </div>
                <div className='main_container'>
                    <Routes/>
                </div>
                <Footer/>
            </div>
        );
    }
}
