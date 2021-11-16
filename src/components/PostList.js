import React, { Component } from "react";
import Moment from "react-moment"; //for timezone support

import "../static/styles/postlist.css";

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <i class="far fa-user"></i>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">
                    <Moment fromNow>{post.createdAt}</Moment>
                  </span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <i class="far fa-heart"></i>
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <i class="far fa-comment"></i>
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Comment.." />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
