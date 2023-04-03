import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
