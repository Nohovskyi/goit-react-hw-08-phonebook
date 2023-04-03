import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.user__wrap}>
      <h2 className={css.user__name}>Welcome, {user.name}!</h2>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
