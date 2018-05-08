import React, {Component} from 'react';

export default class ButtonSort extends Component{
    state = {
        value: 'popularity.desc'
    };

    setSorting = (e) => {
        e.preventDefault();
            this.setState({value: e.target.value});
        this.props.sortMovie(e.target.value)
    };

    render() {
        let {value} = this.state;

        return (
            <div>
                <select value={value}  onChange={this.setSorting}  className='dropdown'>
                    <option value='popularity.desc'>By popularity</option>
                    <option value='popularity.asc'>By popularity</option>
                    <option value='release_date.desc'>By release date</option>
                    <option value='release_date.asc'>By release date</option>
                    <option value='vote_average.desc'>By vote average</option>
                    <option value='vote_average.asc'>By vote average</option>
                    <option value='vote_count.desc'>By vote count</option>
                    <option value='vote_count.asc'>By vote count</option>
                </select>
            </div>
        )
    }
}