import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import PostList from "./PostList";
import Page404 from "./Page404";

const Home = () => <div>HOME</div>;
const Login = () => <div>LOG IN</div>;
const SignUp = () => <div>Sign Up</div>;

class App extends Component {
  componentDidMount() {
    //fetch posts through API by dispatching an action
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
