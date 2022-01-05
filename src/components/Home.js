import React from "react";

import PostsList from "./PostList";
import FriendList from "./FriendList";

export default function Home(props) {
  return (
    <div className="home">
      <PostsList posts={props.posts} />
      {props.isLoggedIn && <FriendList friends={props.friends} />}
    </div>
  );
}
