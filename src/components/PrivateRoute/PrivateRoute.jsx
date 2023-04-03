import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
