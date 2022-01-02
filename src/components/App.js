import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import PostList from "./PostList";
import Page404 from "./Page404";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SingUp";
import { authenticateUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    //fetch posts through API by dispatching an action
    this.props.dispatch(fetchPosts());
    //persist the user using token
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home posts={posts} />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Page404 />} /> {/*NO URL MATCHED*/}
          </Routes>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
