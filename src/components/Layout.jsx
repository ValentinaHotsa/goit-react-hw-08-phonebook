import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
