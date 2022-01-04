import React, { Component } from "react";
import { connect } from "react-redux"; // used for connecting the component to the store
import { Redirect } from "react-router";

import { clearAuthStae, login } from "../actions/auth";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthStae());
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    const email = this.emailInputRef.current.value;
    const password = this.passwordInputRef.current.value;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (isLoggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
          <button onClick={this.handleFormSubmit} disabled={inProgress}>
            Log In
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(LogIn);
