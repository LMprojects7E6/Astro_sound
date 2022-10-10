import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "pages/login";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  );
};

export default Router;
