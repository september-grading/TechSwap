import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserById } from '../../services/users';
import Auth from '../Auth/Auth';

export default function UserView({ currentUser, setCurrentUser }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser === null) {
      <Auth setCurrentUser={setCurrentUser} />;
      setLoading(false);
    } else {
      const fetchData = async () => {
        const resp = await getUserById(currentUser.user.id);
        setUser(resp);
        setLoading(false);
      };
      fetchData();
    }
  }, [currentUser, setCurrentUser]);
  return loading ? (
    <h1>LOADING</h1>
  ) : (
    <>
      <div>User Profile View</div>
      <br></br>
      <div>{user.name}</div>
      <Link to={`/profile/${user.id}/edit`}>Edit</Link>
    </>
  );
}
