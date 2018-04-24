import React, {Component} from 'react';

export default class Choice extends Component {
    chooseMovie = (e) => {
        e.preventDefault();
        this.props.setUrl(e.target.id);
    };

    render() {
        return (
            <div>
                <button id='movie' onClick={this.chooseMovie}>Movie</button>
                <button id='tv' onClick={this.chooseMovie}>Tv</button>
            </div>
        )
    }
}