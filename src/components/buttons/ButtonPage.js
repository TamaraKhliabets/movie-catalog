import React, {Component} from 'react';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setPage} from "../../actions/options";

class ButtonPage extends Component {
    setNewPage = (e) => {
        // e.preventDefault();
        this.props.setCurrentPage(e.target.value);
        this.props.history.push(`/${this.props.direction}${this.props.location.search.slice(0,-1)}${e.target.value}`)
    };


    render() {
        const {page, totalPages} = this.props;

        let total = totalPages > 1000 ? 1000 : totalPages;

        let buttonsList = Array.from({length: 5}, (e, i) => page - 2 + i)
            .filter(e => e > 0 && e <= total)
            .map((e, i) => {
                return (
                    <button key={i}
                            onClick={this.setNewPage}
                            className={page === e ? 'page_button_item_active' : 'page_button_item'}
                            value={e}>{e}</button>
                )
            });

        return (
            <div className='page_button_group'>
                {
                    (page < 3) ? null :
                        <button onClick={this.setNewPage} className='page_button_item' value={1}>&#171;</button>
                }
                {
                    (page < 2) ? null :
                        <button onClick={this.setNewPage} className='page_button_item'
                                value={+page - 1}>&#8249;</button>
                }
                {buttonsList}
                {
                    (page > total - 1) ? null :
                        <button onClick={this.setNewPage} className='page_button_item'
                                value={+page + 1}>&#8250;</button>
                }
                {
                    (page > total - 2) ? null :
                        <button onClick={this.setNewPage} className='page_button_item' value={total}>&#187;</button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    page: state.page,
    totalPages: state.totalPages,
    direction: state.direction
});

const mapDispatchToProps = dispatch => ({
    setCurrentPage: page => dispatch(setPage(page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonPage));