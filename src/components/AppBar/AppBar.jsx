import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
