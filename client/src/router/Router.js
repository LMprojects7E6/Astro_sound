import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/layout";
import Login from "pages/login";
import Home from "pages/home";
import Library from "pages/library";
import Search from "pages/search";
import Profile from "pages/profile";
import Register from "pages/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
