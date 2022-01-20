import React, { useState, useEffect } from 'react';
// import EditUser from '../../views/User/EditUser';
// import { fetchUsers } from '../../services/users';

export default function Users({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>LinkedIn: {user.linkedin_url}</div>
      <div>Slack: {user.slack_id}</div>
    </div>
  );
}
