import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserProfile } from "../actions/profile";

class User extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const { user, inProgress } = this.props.profile;
    if (inProgress) {
      return <h1>Loading!!</h1>;
    }
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
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(User);
