import React from "react";
import { Routes, Route } from "react-router-dom";

import FullScreenModal from "components/fullScreenModal";
import Login from "pages/login";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register/>} />
    </Routes>
  );
};

export default Router;
