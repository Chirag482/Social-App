import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <i class="fas fa-search" id="search-icon"></i>
            <input placeholder="search"></input>

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <i class="far fa-user"></i>
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <i class="far fa-user"></i>
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <i class="far fa-user" id="user-dp"></i>
              <span>ABC</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log In</li>
                <li>Log Out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
