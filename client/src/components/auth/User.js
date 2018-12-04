import React from 'react';
import PropTypes from 'prop-types';
import UserButton from '../user/UserButton';
import Auth from './Auth';

function User({ userName }) {
  return userName ? <UserButton /> : <Auth />;
}

User.propTypes = {
  userName: PropTypes.bool,
};

User.defaultProps = {
  userName: null,
};

export default User;
