import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
