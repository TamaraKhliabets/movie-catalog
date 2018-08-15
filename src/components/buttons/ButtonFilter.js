import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setDirection, setOption} from "../../actions/options";
import {withRouter} from 'react-router-dom';

class ButtonFilter extends Component {
    state = {
        sortBy: 'popularity.desc',
        year: 0,
        showFilter: false
    };

    changeFilter = () => {
        this.setState({showFilter: !this.state.showFilter})
    };

    setSorting = (e) => {
        this.setState({sortBy: e.target.value});
    };

    setYear = (e) => {
        this.setState({year: e.target.value});
    };

    handleSubmit = () => {
        let {sortBy, year} = this.state;
        let today = new Date().getFullYear();
        this.props.setCurrentDirection('filter');
        if (year === 0) {
            this.props.setCurrentOption(`language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&year=${today}`);
            this.props.history.push(`/filter?sort_by=${sortBy}&page=1`)
        } else {
            this.props.setCurrentOption(`language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&primary_release_year=${year}`);
            this.props.history.push(`/filter?sort_by=${sortBy}&year=${year}&page=1`)
        }
    };

    render() {
        let {showFilter, sortBy, year} = this.state;

        let yearOption = Array.from({length: 30}, (e, i) => {
            let setYear = new Date().getFullYear() - i;
            return (
                <option key={i} value={setYear}>{setYear}</option>
            )
        });

        return (
            <div className='options'>
                <button className={showFilter ? 'filter_button filter_button_active' : 'filter_button'}
                        onClick={this.changeFilter}>
                    <span className={showFilter ? 'filter_arrow_up' : 'filter_arrow_down'}/>
                    Filter
                </button>
                {showFilter ?
                    (<div className='filter_form'>
                        <div className='filter_name'>Order:</div>
                        <select value={sortBy} onChange={this.setSorting} className='filter_select'>
                            <option value='popularity.desc'>Most popular</option>
                            <option value='release_date.desc'>Release date</option>
                            <option value='vote_count.desc'>Most vote count</option>
                        </select>
                        <div className='filter_name'>Year:</div>
                        <select value={year} onChange={this.setYear} className='filter_select'>
                            <option value='0'>All</option>
                            {yearOption}
                        </select>
                        <button
                            className='filter_form_submit'
                            onClick={this.handleSubmit}>
                            Show
                        </button>
                    </div>) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    direction: state.direction,
    option: state.option
});

const mapDispatchToProps = dispatch => ({
    setCurrentOption: option => dispatch(setOption(option)),
    setCurrentDirection: direction => dispatch(setDirection(direction))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonFilter));