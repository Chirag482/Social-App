import React from "react";
import FriendListItem from "./FriendListItem";

function FriendList(props) {
  const { friends } = props;
  return (
    <div className="friends-list">
      <div className="header">Friends</div>
      {friends && friends.length === 0 && (
        <div className="n0-friends">No Friends Found!!</div>
      )}
      {friends &&
        friends.map((friend) => {
          <FriendListItem user={friend} key={friend._id} />;
        })}
    </div>
  );
}
export default FriendList;
