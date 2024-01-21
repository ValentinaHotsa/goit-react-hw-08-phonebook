import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
const Layout = () => {
  return (
    <container>
      <header>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </main>
    </container>
  );
};
export default Layout;
