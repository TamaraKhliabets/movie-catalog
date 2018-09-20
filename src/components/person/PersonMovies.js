import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieLink from "../links/MovieLink";

class PersonMovies extends Component {
    state = {
        start: 0,
        end: 20,
        visibleButtons: false
    };

    prevMovies = () => {
        let {start, end} = this.state;
        if (start > 0) {
            this.setState({
                start: start - 20,
                end: end - 20
            })
        }
    };

    nextMovies = () => {
        let {start, end} = this.state;
        if (end < this.props.personMovie.length - 1)
            this.setState({
                start: start + 20,
                end: end + 20
            })
    };

    componentDidMount() {
        if (this.props.personMovie.length >= 20)
            this.setState({visibleButtons: true})
    }

    render() {
        let {personMovie} = this.props;
        let {start, end, visibleButtons} = this.state;

        // let actualMovies = personMovie.slice(start, end).map(e => {
        //     return (
        //         <div key={e.id} className='list_item'>
        //             <MovieLink movie={e}/>
        //         </div>
        //     )
        // });

        return (
            <div>
                <div className='list'>
                    {/*{actualMovies}*/}
                </div>
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

const mapStateToProps = ({personMovie}) => ({
    personMovie
});

export default connect(mapStateToProps)(PersonMovies);