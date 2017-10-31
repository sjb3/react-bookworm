import React, { Component } from 'react';
import SignupForm from '../forms/SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { signup } from '../../actions/users';

class SignupPage extends Component {

  submit = (data) => this.props.signup(data).then( () =>
    this.props.history.push('/dashboard'));

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    )
  }
}

SignupPage.PropTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);