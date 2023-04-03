import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.nav__link__home}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.nav__link__contacts}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
