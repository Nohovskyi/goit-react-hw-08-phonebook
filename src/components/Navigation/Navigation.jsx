import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
