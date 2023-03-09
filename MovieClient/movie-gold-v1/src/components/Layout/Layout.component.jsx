import { Outlet } from 'react-router-dom';
import React from 'react';

import './Layout.styles.scss';

const Layout = () => {
  return (
    <main>
      <Outlet/>
    </main>
  );
};

export default Layout;