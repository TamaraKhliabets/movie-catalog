import React, {Component} from 'react';
import LinkItem from './LinkItem';

export default class MovieList extends Component {

  render() {
    const {movies, genres} = this.props;

    let nodeItem = (movies && genres) ?
      movies.map(e => {
        return (
          <div key={e.id}>
            <LinkItem movie={ e }
                      genres={ genres }/>
          </div>
        )}) : 'Loading';

    return (
      <div className='list'>
        {nodeItem}
      </div>
    );
  }


}