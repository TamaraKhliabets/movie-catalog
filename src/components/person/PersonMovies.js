import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieLink from "../links/MovieLink";
import {personIsLoad} from "../../reducers/person";

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

    // componentDidMount() {
    //     if (this.props.personMovie.length >= 20)
    //         this.setState({visibleButtons: true})
    // }

    render() {
        let {personMovie, personIsLoad} = this.props;
        // let {start, end, visibleButtons} = this.state;
console.log(personIsLoad);
        // let actualMovies = personMovie.map(e => {
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
                {/*{*/}
                    {/*visibleButtons ?*/}
                        {/*<div className='btns_arrow'>*/}
                            {/*<button onClick={this.prevMovies} className='btn_arrow'>prev</button>*/}
                            {/*<button onClick={this.nextMovies} className='btn_arrow'>next</button>*/}
                        {/*</div>*/}
                        {/*: null*/}
                {/*}*/}
            </div>
        )
    }
}

const mapStateToProps = ({personMovie, personIsLoad}) => ({
    personMovie,
    personIsLoad
});

export default connect(mapStateToProps)(PersonMovies);