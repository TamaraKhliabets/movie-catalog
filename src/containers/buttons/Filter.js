import { connect } from 'react-redux';
import { setDirection, setOption, setSorting, setYear, changePage, setPage } from '../../actions/options';
import ButtonFilter from '../../components/buttons/ButtonFilter';

const mapStateToProps = ({ direction, sorting, year, genre }) => ({
	direction,
	sorting,
	year,
	genre,
});

const mapDispatchToProps = {
	setOption,
	setDirection,
	setSorting,
	setYear,
	setPage,
	changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
