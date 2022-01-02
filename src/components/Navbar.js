import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
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
            <div className="user">
              <i className="far fa-user" id="user-dp"></i>
              <span>ABC</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/login">Log Out</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
