import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeToggle from "../Darkmode/Darkmode";

const Layout: React.FC = () => {
  return (
    <div className="bg-white dark:bg-darkBg text-black dark:text-textLight min-h-screen transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white dark:bg-darkBg shadow-md px-4 md:px-[8rem] py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold dark:text-gray-300 font-italic">REM WASTE</span>
        </div>

        <DarkModeToggle />
      </header>

      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
