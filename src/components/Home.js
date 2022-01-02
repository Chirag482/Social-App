import React, { Component } from "react";
import PostsList from "./PostList";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}
