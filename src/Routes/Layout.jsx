import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
