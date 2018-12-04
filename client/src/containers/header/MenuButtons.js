import { connect } from 'react-redux';
import MenuItems from '../../components/header/menu/MenuItems';
import {
  changePage, setDirection, setOption, setPage,
} from '../../actions/options';

const mapDispatchToProps = {
  setDirection,
  setPage,
  setOption,
  changePage,
};

export default connect(state => state, mapDispatchToProps)(MenuItems);
