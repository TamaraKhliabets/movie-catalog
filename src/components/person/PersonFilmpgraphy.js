import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setActualMovies} from "../../actions/person";
import PersonMovies from "./PersonMovies";

class PersonFilmpgraphy extends Component{
    changeActualMovies = () => {
        this.props.setActualMovies(!this.props.showMovies)
    };

    render () {
        let {person, personMovie, personTv} = this.props;

        return (
            <div>
                {personMovie ? <button onClick={this.changeActualMovies} className='subtitle'>{person.name}'s movies</button> : null}
                {personTv ? <button onClick={this.changeActualMovies} className='subtitle'>{person.name}'s TV shows</button> : null}
                <PersonMovies/>
            </div>
        )
    }
}

const mapStateToProps = ({showMovies, person, personMovie, personTv}) => ({
    showMovies,
    person,
    personMovie,
    personTv
});

const mapDispatchToProps = {
    setActualMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonFilmpgraphy);