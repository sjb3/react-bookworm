import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className='ui container'>
    <Route location={location} path='/' exact component = {HomePage} />
    <Route location={location} path='/confirmation/:token' exact component = {ConfirmationPage} />
    <GuestRoute location={location} path='/login' exact component = {LoginPage} />
    <GuestRoute location={location} path='/singup' exact component = {SignupPage} />
    <UserRoute location={location} path='/dashboard' exact component = {DashboardPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

// React doesn't like this way
// App.propTypes = {
//     location: PropTypes.object.isRequired
// };

export default App;
