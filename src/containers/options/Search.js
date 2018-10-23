import { connect } from 'react-redux';
import Search from '../../components/options/Search';
import { changePage, setDirection, setOption, setPage } from '../../actions/options';

const mapDispatchToProps = {
	changePage,
	setDirection,
	setOption,
	setPage,
};

export default connect(state => state, mapDispatchToProps)(Search);
