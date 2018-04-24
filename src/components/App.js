import React, {Component} from 'react';
import Routes from './routes/Routes';
import Title from "./header/Title";
import Menu from './header/menu/Menu';
import Footer from './Footer';

export default class App extends Component {

  render() {
    return (
      <div>
        <div  className='title_container'>
          <Title/>
          <Menu/>
        </div>
        <div className='main_container'>
          <Routes/>
        </div>
        <Footer/>
      </div>
    );
  }
}
