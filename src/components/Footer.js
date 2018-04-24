import React, {Component} from 'react';

export default class Footer extends Component{
    render() {
        const url = `https://developers.themoviedb.org/3`;

        return (
            <div>
                <a href={url}>foo</a>
            </div>
        )
    }
}