import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserProfile } from "../actions/profile";
import { getAuthTokenFromLocalStorage } from "../static/utils/utils";
import { addFriend } from "../actions/friends";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }
  checkIfUserIsAFriend = () => {
    const { match, friends } = this.props;
    const userId = match.params.userId;
    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  handleAddFriend = async () => {
    const userId = this.props.match.params.userId;
    const URL = `http://codeial.codingninjas.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(URL, options);
    const data = await response.json();

    if (data.success) {
      this.setState({
        success: true,
      });
      this.props.dispatch(addFriend(data.data.friendship));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };
  render() {
    const { user, inProgress } = this.props.profile;
    if (inProgress) {
      return <h1>Loading!!</h1>;
    }
    const isUserAFriend = this.checkIfUserIsAFriend();
    const { error } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          {isUserAFriend ? (
            <button className="button save-btn">Remove Friend</button>
          ) : (
            <button className="button save-btn" onClick={this.handleAddFriend}>
              Add Friend
            </button>
          )}
        </div>
        {error && <div className="alert error-dailog">{error}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    friends: state.friends,
  };
}
export default connect(mapStateToProps)(User);
