import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ButtonPage extends Component {


    render() {
        const {page, total, url} = this.props;

        let buttonsList = Array.from({length: 5}, (e, i) => page - 2 + i)
            .filter(e => e > 1 && e <= total - 1)
            .map(e => {
                return (
                        <Link key={e} to={`/${url}/p=${e}`}>{e}</Link>
                )
            });

        return (
            <div className='page_button_group'>
                {/*{console.log(total)}*/}

                {
                    (page <= 1) ? null : <Link to={`/${url}/p=${page - 1}`}>&#171;</Link>
                }
                <Link to={`/${url}/p=1`}>1</Link>
                <div>{buttonsList}</div>
                <Link to={`/${url}/p=${total}`}>{total}</Link>
                {
                    (page >= total) ? null : <Link to={`/${url}/p=${page + 1}`}>&#187;</Link>
                }
            </div>
        )
    }
}