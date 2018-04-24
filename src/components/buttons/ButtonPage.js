import React, {Component} from 'react';

export default class ButtonPage extends Component {
  prevList = () => {
    this.props.setNewPage(-1)
  };

  nextList = () => {
    this.props.setNewPage(1)
  };

  render() {
    const {page, total} = this.props;

    let buttonsList = Array.from({length: 5}, (e, i) => page - 2 + i)
      .filter(e => e > 0 && e <= total)
      .map(e => {
        return (
          <button key={e} className='page_button_item'>{e}</button>
        )
      });

    return (
      <div className='page_button_group'>
        <button className='page_button_item' onClick={this.prevList}>&#171;</button>
        <div>{buttonsList}</div>
        <button  className='page_button_item' onClick={this.nextList}>&#187;</button>
      </div>
    )
  }
}