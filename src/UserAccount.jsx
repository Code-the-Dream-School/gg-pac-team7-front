// src/UserAccount.js
import React from 'react';
import './UserAccount.css'; // Optional, for styling

const UserAccount = () => {
  // Static user information
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com'
  };

  return (
    <div className="user-account">
      <h1>User Account</h1>
      <div>
        <label>
          Username:
          <span>{user.username}</span>
        </label>
      </div>
      <div>
        <label>
          Email:
          <span>{user.email}</span>
        </label>
      </div>
    </div>
  );
};

export default UserAccount;
