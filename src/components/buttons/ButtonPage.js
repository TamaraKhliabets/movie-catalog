import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ButtonPage extends Component {


    render() {
        const {page, total, direction} = this.props;

        let buttonsList = Array.from({length: 5}, (e, i) => page - 2 + i)
            .filter(e => e > 1 && e <= total - 1)
            .map(e => {
                return (
                        <Link key={e} to={`/${direction}page=${e}`}>{e}</Link>
                )
            });

        return (
            <div className='page_button_group'>
                {
                    (page <= 1) ? null : <Link to={`/${direction}page=${page - 1}`}>&#171;</Link>
                }
                <Link to={`${direction}page=1`}>1</Link>
                <div>{buttonsList}</div>
                <Link to={`/${direction}page=${total}`}>{total}</Link>
                {
                    (page >= total) ? null : <Link to={`/${direction}page=${page + 1}`}>&#187;</Link>
                }
            </div>
        )
    }
}