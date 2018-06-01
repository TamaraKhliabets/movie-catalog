import React, {Component} from 'react';
import ListItem from "../movies/ListItem";

export default class PersonMovies extends Component {
    state = {
        start: 0,
        end: 4,
        visibleButtons: false
    };

    prevMovies = () => {
        let {start, end} = this.state;
        if (start > 0) {
            this.setState({
                start: start - 4,
                end: end - 4
            })
        }
    };

    nextMovies = () => {
        let {start, end} = this.state;
        if (end < this.props.movie.length - 1)
            this.setState({
                start: start + 4,
                end: end + 4
            })
    };

    componentDidMount() {
        if (this.props.movie.length >= 4)
            this.setState({visibleButtons: true})
    }

    render() {
        let {movie, direction} = this.props;
        let {start, end, visibleButtons} = this.state;

        let actualMovies = movie.slice(start, end);

        return (
            <div>
                <ListItem movies={actualMovies} direction={direction}/>
                {
                    visibleButtons ?
                        <div className='btns_arrow'>
                            <button onClick={this.prevMovies} className='btn_arrow'>prev</button>
                            <button onClick={this.nextMovies} className='btn_arrow'>next</button>
                        </div>
                        : null
                }
            </div>
        )
    }
}