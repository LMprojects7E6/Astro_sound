import React from "react";
import { Routes, Route } from "react-router-dom";

import FullScreenModal from "components/fullScreenModal";
import Login from "pages/login";
import Register from "../pages/register/Register";
import Aside from "../pages/layout/aside";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register/>} />
      <Route path="aside" element={<Aside/>} />
    </Routes>
  );
};

export default Router;
