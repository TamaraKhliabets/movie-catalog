import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  const {
    userName, findFavoriteMovies, findFavoriteTvs, setDirection, changePage,
  } = props;
  return (
    <div className="user_log">
      <div className="userinfo_btn">
        {`Signed up as ${userName}`}
      </div>
      <input
        type="button"
        className="userinfo_btn"
        value="Favorite movies"
        onClick={() => {
          findFavoriteMovies({ userName });
          setDirection('favoriteMovie?');
          changePage('/favoriteMovie');
        }}
      />
      <input
        type="button"
        className="userinfo_btn"
        value="Favorite TV shows"
        onClick={() => {
          findFavoriteTvs({ userName });
          setDirection('favoriteTv?');
          changePage('/favoriteTv');
        }}
      />
      <div className="userinfo_btn_sbt">
        <button type="button" className="userinfo_btn" onClick={() => props.logout(0)}>Sign out</button>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userName: PropTypes.string,
  findFavoriteMovies: PropTypes.func.isRequired,
  findFavoriteTvs: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

UserInfo.defaultProps = {
  userName: '',
};

export default UserInfo;
