import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import PostList from "./PostList";

class App extends Component {
  componentDidMount() {
    //fetch posts through API by dispatching an action
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div>
        <Navbar />
        <div className="posts-container">
          <PostList posts={posts} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
