import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col flex-1">
      <AppHeader />
      <main className="flex-1 px-5 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
