import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import SkipsPage from "./pages/Skip/Skip";

const NotFound = () => (
  <div className="text-center mt-10 text-xl font-semibold">
    404 - Page Not Found
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SkipsPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
