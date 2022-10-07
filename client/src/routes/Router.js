import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signin from '../pages/login/components/Signin';
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <Routes>
        <Route index element={<Login />} />
        <Route path="signin" element={<Signin />} />
    </Routes>
  )
}

export default Router;