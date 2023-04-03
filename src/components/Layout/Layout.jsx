import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
