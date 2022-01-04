import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { clearAuthStae, singUp } from "../actions/auth";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.confirmPasswordInputRef = React.createRef();
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthStae());
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = this.nameInputRef.current.value;
    const email = this.emailInputRef.current.value;
    const password = this.passwordInputRef.current.value;
    const confirmPassword = this.confirmPasswordInputRef.current.value;
    if (name && email && password && confirmPassword) {
      this.props.dispatch(singUp(name, email, password, confirmPassword));
    }
  };
  render() {
    const { error, inProgress } = this.props.auth;
    if (this.props.auth.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Sing Up</span>
          {error && <div className="alert error-dailog">{error}</div>}
          <div className="field">
            <input
              type="name"
              placeholder="Name"
              required
              ref={this.nameInputRef}
            />
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              required
              ref={this.emailInputRef}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              required
              ref={this.passwordInputRef}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={this.confirmPasswordInputRef}
            />
          </div>
          <div className="field">
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(SingUp);
