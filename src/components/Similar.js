import React, {Component} from 'react'
import Main from "./Main";

export default class Similar extends Component{
    render() {
        const {movies} = this.props;

        return (
            <div>
                <Main movies={movies}/>
                {console.log(movies)}
            </div>
        )
    }
}