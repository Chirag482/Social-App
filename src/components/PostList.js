import React from "react";
import Moment from "react-moment"; //for timezone support
import { Link } from "react-router-dom";

import "../static/styles/postlist.css";

function PostsList(props) {
  const { posts } = props;
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div className="post-wrapper" key={post._id}>
          <div className="post-header">
            <div className="post-avatar">
              <Link to={`/user/${post.user._id}`}>
                <i className="far fa-user"></i>
              </Link>
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
                <i className="far fa-heart"></i>
                <span>{post.likes.length}</span>
              </div>

              <div className="post-comments-icon">
                <i className="far fa-comment"></i>
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

export default PostsList;
