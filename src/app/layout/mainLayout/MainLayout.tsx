import { Outlet } from 'react-router';

import Sidebar from '../sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div className="h-screen bg-black">
      <Sidebar />
      <main className="h-screen w-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
