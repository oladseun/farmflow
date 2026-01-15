import React from 'react';

// You can import your header, sidebar, and footer components here once created
// import { AppHeader } from './AppHeader';
// import { AppSidebar } from './AppSidebar';
// import { AppFooter } from './AppFooter';

export const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <AppHeader /> */}
      
      <div className="flex flex-1">
        {/* <AppSidebar /> */}
        
        <main className="flex-1 p-4">
          {children} 
          {/* If using react-router, you might use <Outlet /> here instead of children */}
        </main>
      </div>

      {/* <AppFooter /> */}
    </div>
  );
};

export default AppLayout;
