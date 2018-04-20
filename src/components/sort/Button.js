import React, {Component} from 'react';

export default class Button extends Component{
    setSorting= (e) => {
            e.preventDefault();
            this.props.sortMovie(e.target.id)
    };

    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.setSorting} id='popularity.desc'>By popularity <span>&#9660;</span></li>
                    <li onClick={this.setSorting} id='popularity.asc'>By popularity <span>&#9650;</span></li>
                    <li onClick={this.setSorting} id='release_date.desc'>By release date <span>&#9660;</span></li>
                    <li onClick={this.setSorting} id='release_date.asc'>By release date <span>&#9650;</span></li>
                    <li onClick={this.setSorting} id='vote_average.desc'>By vote average <span>&#9660;</span></li>
                    <li onClick={this.setSorting} id='vote_average.asc'>By vote average <span>&#9650;</span></li>
                    <li onClick={this.setSorting} id='vote_count.desc'>By vote count <span>&#9660;</span></li>
                    <li onClick={this.setSorting} id='vote_count.asc'>By vote count <span>&#9650;</span></li>
                </ul>
            </div>
        )
    }
}