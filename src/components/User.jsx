import React from "react";

function User({ userImage, userName, userAge }) {
  return (
    <div className="user">
      <img src={userImage} alt={userName} className="user__image" />
      <div>
        <h4 className="user__name">{userName}</h4>
        <p className="user__age">{userAge} years</p>
      </div>
    </div>
  );
}

export default User;
