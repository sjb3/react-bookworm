import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
// import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
// import PropTypes from 'prop-types';

const App = ({ location }) => (
  <div className='ui container'>
    <Route location={location} path="/" exact component={ HomePage } />
    {/* <UserRoute path='./dashboard' exact component={ DashboardPage }></UserRoute> */}
    <GuestRoute location={location} path="/login" exact component={ LoginPage } />
    <GuestRoute location={location} path="/signup" exact component={ SignupPage } />
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
