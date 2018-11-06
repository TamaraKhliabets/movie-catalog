import { connect } from 'react-redux';
import { changePage, setDirection, setOption, setPage } from '../../actions/options';

import Title from '../../components/header/Title';

const mapDispatchToProps = {
  setDirection,
  setPage,
  setOption,
  changePage,
};

export default connect(state => state, mapDispatchToProps)(Title);
