import React from "react";
import { Link } from "react-router-dom";

export default function FriendListItem(props) {
  return (
    <div>
      <Link className="friends-item" to={`user/${props.user._id}`}>
        <div className="friends-img">
          <i className="far fa-user"></i>
        </div>
        <div className="friends-name">{props.user.name}</div>
      </Link>
    </div>
  );
}
