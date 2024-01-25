import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
