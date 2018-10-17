import React, {Component} from 'react';

export default class ButtonFilter extends Component {
    state = {
        showFilter: false
    };

    changeFilter = () => {
        this.setState({showFilter: !this.state.showFilter})
    };

    handleSubmit = () => {
        let {
            direction,
            sorting,
            year,
            genre,
            changePage,
            setOption,
            setDirection,
            setPage
        } = this.props;
        let today = new Date().getFullYear();

        let optionForApi = [
            'language=en-US&include_adult=false&include_video=false',
            (sorting) ? `&sort_by=${sorting}` : '',
            (+year) ? `&primary_release_year=${year}` : `&year=${today}`,
            (genre) ? `with_genres=${genre.split('_')[1]}` : ''
        ].join('');
        let optionForRoute = [
            (sorting) ? `sort=${sorting}&` : '',
            (+year) ? `year=${year}&` : '',
            (genre) ? `genre=${genre.split('_')[0]}&` : ''
        ].join('');
        changePage(`/filter_${direction}${optionForRoute}page=1`);
        setDirection(`filter_${direction}`);
        setOption(optionForApi);
        setPage(1);
        this.setState({showFilter: !this.state.showFilter})
    };

    render() {
        let {showFilter} = this.state;
        let {sorting, year, setSorting, setYear} = this.props;

        let yearOption = Array.from({length: 30}, (e, i) => {
            let setYear = new Date().getFullYear() - i;
            return (
                <option key={i}>{setYear}</option>
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
                        <select value={sorting ? sorting : 'popularity.desc'}
                                onChange={e => setSorting(e.target.value)}
                                className='filter_select'>
                            <option value='popularity.desc'>Most popular</option>
                            <option value='release_date.desc'>Release date</option>
                            <option value='vote_count.desc'>Most vote count</option>
                        </select>
                        <div className='filter_name'>Year:</div>
                        <select value={year ? year : 0}
                                onChange={e => setYear(e.target.value)}
                                className='filter_select'>
                            <option value='0'>All</option>
                            {yearOption}
                        </select>
                        <button className='filter_form_submit'
                                onClick={this.handleSubmit}>
                            Show
                        </button>
                    </div>) : null}
            </div>
        )
    }
}