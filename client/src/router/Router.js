import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/layout";
import Login from "pages/login";
import Home from "pages/home";
import Library from "pages/library";
import Playlists from "pages/playlists";
import Search from "pages/search";
import Profile from "pages/profile";
import Register from "pages/register";
import LikedSongs from "pages/likedSongs";
import ForgotPassword from "pages/forgotPassword/ForgotPassword";
import Genre from "pages/genre";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="likedSongs" element={<LikedSongs />} />
          <Route path="playlist/:id" element={<Playlists />} />
          <Route path="genre/:genre" element={<Genre />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
