import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>HOME PAGE</h1>
    { isAuthenticated ? <button onClick={() => logout}>Logout</button> : <Link to="/login">Login</Link> }

  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRrequired,
  logout: PropTypes.func.isRrequired
};

function mapStateProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateProps, {logout: actions.logout})(HomePage);
