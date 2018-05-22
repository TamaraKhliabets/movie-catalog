import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ButtonPage extends Component {


    render() {
        const {page, total, direction} = this.props;

        let totalPages = total > 1000 ? 1000 : total;

        let buttonsList = Array.from({length: 5}, (e, i) => page - 2 + i)
            .filter(e => e > 0 && e <= totalPages)
            .map(e => {
                return (
                    <Link key={e} to={`/${direction}page=${e}`}
                          className={page === e ? 'page_button_item_active' : 'page_button_item'}>{e}</Link>
                )
            });

        return (
            <div className='page_button_group'>
                {
                    (page < 3) ? null : <Link to={`/${direction}page=1`} className='page_button_item'>&#171;</Link>
                }
                {
                    (page < 2) ? null :
                        <Link to={`/${direction}page=${page - 1}`} className='page_button_item'>&#8249;</Link>
                }
                {buttonsList}
                {
                    (page > totalPages - 1) ? null :
                        <Link to={`/${direction}page=${page + 1}`} className='page_button_item'>&#8250;</Link>
                }
                {
                    (page > totalPages - 2) ? null :
                        <Link to={`/${direction}page=${totalPages}`} className='page_button_item'>&#187;</Link>
                }
            </div>
        )
    }
}