import React, { Component } from 'react';
import LinkItem from "../links/LinkItem";

export default class ListItem extends Component {
  render() {
      const {movies} = this.props;

      let nodeItem = movies.map(e => {
          return (
              <div key={e.id}>
                  <LinkItem movie={e}/>
              </div>
          )
      });

    return (
        <div className='list'>
            {nodeItem}
        </div>
    );
  }
}
