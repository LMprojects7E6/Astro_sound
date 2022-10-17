import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "pages/layout";
import Login from "pages/login";
import Home from "pages/home";
import Library from "pages/library";
import Search from "pages/search";
import Profile from "pages/profile";
import Register from "pages/register";
import Admin from "pages/admin/Admin";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route index path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Router;
