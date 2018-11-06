import { connect } from 'react-redux';
import { changePage, setDirection, setOption, setPage, setGenre } from '../../actions/options';
import { genresFetchData } from '../../actions/genres';
import GenresItems from '../../components/header/menu/GenresItems';

const mapStateToProps = ({ genres }) => ({
  genres,
});

const mapDispatchToProps = {
  setDirection,
  setPage,
  setOption,
  changePage,
  setGenre,
  genresFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresItems);
