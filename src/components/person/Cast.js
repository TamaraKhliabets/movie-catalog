import React, {Component} from 'react';
import PersonLink from '../links/PersonLink';


export default class Cast extends Component {
  state = {
    currentList: this.props.cast.slice(0, 10),
    isVisibleButton: true
  };

  showAllPersons = () => {
    this.setState({
      currentList: this.props.cast,
      isVisibleButton: !this.state.isVisibleButton
    })
  };

  showAnyPersons = () => {
    this.setState({
      currentList: this.props.cast.slice(0, 10),
      isVisibleButton: !this.state.isVisibleButton
    })
  };

  render() {
    const {cast} = this.props;

    let {currentList, isVisibleButton} = this.state;


    let listActors = currentList.map(e => {
      return (
        <div key={e.id}>
          <PersonLink actor={e}/>
        </div>
      )
    });

    return (
      <div>
        <div>
          {listActors}
        </div>
        {
          (cast.length > 10) ?
            (isVisibleButton ?
              <button onClick={this.showAllPersons}>more</button> :
              <button onClick={this.showAnyPersons}>less</button>) :
            null
        }
      </div>
    )
  }
}
