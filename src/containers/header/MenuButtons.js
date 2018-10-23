import { connect } from 'react-redux';
import Menu from '../../components/header/menu/Menu';
import { changePage, setDirection, setOption, setPage } from '../../actions/options';

const mapDispatchToProps = {
	setDirection,
	setPage,
	setOption,
	changePage,
};

export default connect(state => state, mapDispatchToProps)(Menu);
