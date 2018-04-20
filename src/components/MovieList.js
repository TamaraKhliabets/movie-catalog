import React, {Component} from 'react';
import LinkItem from './LinkItem';
import Button from "./Button";

export default class MovieList extends Component {
  render() {
    const {movies, page, total, setNewPage} = this.props;

    let nodeItem = movies.map(e => {
        return (
          <div key={e.id}>
            <LinkItem movie={ e }/>
          </div>
        )});

    // if(!requests) return <div>loading</div>;

    return (
      <div>
        <div className='list'>
          {nodeItem}
        </div>
        <div className='page_button'>
          <Button page={page}
                  total={total}
                  setNewPage={setNewPage}/>
        </div>
      </div>
    );
  }
}