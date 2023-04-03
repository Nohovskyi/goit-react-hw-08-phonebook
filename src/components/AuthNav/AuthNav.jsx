import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/register" className={css.nav__link__register}>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={css.nav__link__login}>
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
