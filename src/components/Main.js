import React, {Component} from 'react';
import ListItem from '../containers/ListItem';

export default class Main extends Component{


  render() {
    const {movies, page, total, setNewPage} = this.props;
    return(
      <div>
        <ListItem movies={movies}
                  page={page}
                  total={total}
                  setNewPage={setNewPage}/>
      </div>
    )
  }
}