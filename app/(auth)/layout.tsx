import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-center h-screen text-white">
      {children}this is auth
    </main>
  );
};

export default Layout;
