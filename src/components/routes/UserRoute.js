// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
//
// const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
//   />
// );
//
// UserRoute.propTypes = {
//   component: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired
// };
//
// function mapStateToProps(state) {
//   return {
//     isAuthenticated: !!state.user.token
//   };
// }
//
// export default connect(mapStateToProps)(UserRoute);

import React from 'react';
import PropTypes  from 'prop-types';
import { Route } from 'react-router-dom';

const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default UserRoute;
