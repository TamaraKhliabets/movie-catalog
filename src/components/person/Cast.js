import React, {Component} from 'react';
import PersonLink from '../links/PersonLink';


export default class Cast extends Component {
    state = {
        marginLeft: 5
    };

    prevMargin = () => {
            this.setState({marginLeft: this.state.marginLeft + 90})

    };


    nextMargin = () => {
        this.setState({marginLeft: this.state.marginLeft - 90})
    };

  render() {
    const {cast} = this.props;
    const {marginLeft} = this.state;

      let listActors = cast.map((e, i) => {
            return (
              <div key={e.id} id={i}>
                <PersonLink actor={e}/>
              </div>
            )
          });

    return (
      <div>
          <div>Starring:</div>
          <div className='cast_wrapper'>
              <button onClick={this.prevMargin} className='cast_arrow arrow_left'>&#10094;</button>
              <div className='cast' id='cast' style={{width: cast.length * 100 + '%', marginLeft: `${marginLeft}%`}}>
                  {listActors}
              </div>
              <button onClick={this.nextMargin} className='cast_arrow arrow_right'>&#10095;</button>
          </div>
      </div>
    )
  }
}
