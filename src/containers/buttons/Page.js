import { connect } from 'react-redux';
import { setPage, changePage } from '../../actions/options';
import ButtonPage from '../../components/buttons/ButtonPage';

const mapStateToProps = ({ page, totalPages, direction, sorting, year, genre }) => ({
  page,
  totalPages,
  direction,
  sorting,
  year,
  genre,
});

const mapDispatchToProps = {
  setPage,
  changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage);
