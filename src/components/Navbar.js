import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions/auth";

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logOut());
  };
  render() {
    const { auth } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <Link to="/">
              <img
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <i className="fas fa-search" id="search-icon"></i>
            <input placeholder="search"></input>

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <i className="far fa-user"></i>
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <i className="far fa-user"></i>
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            {auth.isLoggedIn && (
              <div className="user">
                <Link to="/settings">
                  <i className="far fa-user" id="user-dp"></i>
                  <span>{auth.user.name}</span>
                </Link>
              </div>
            )}

            <div className="nav-links">
              <ul>
                {!auth.isLoggedIn && (
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                )}
                {auth.isLoggedIn && <li onClick={this.logOut}>Log Out</li>}
                {!auth.isLoggedIn && (
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
