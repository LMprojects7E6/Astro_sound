import React, { useContext, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import loginImage from "assets/login.jpg";
import LoginForm from "./loginForm/LoginForm";
import Logo from "components/logo";
import FormSection from "components/formSection";

import { AuthContext } from "context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { user, verifyTokenExpiration, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const verifyToken = async () => {
        try {
          await verifyTokenExpiration();
          navigate("/", { replace: true });
        } catch (error) {
          await signOut();
          console.log("Token expired, SIGN OUT!!");
        }
      };
      verifyToken();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <FormSection imgUrl={loginImage}>
      <Logo width={"w-28"} />
      <div className=" text-center mb-10">
        <h1 className="font-bold text-3xl">Welcome back!</h1>
        <p>Welcome to Astro sounds! Enter your credentials.</p>
      </div>
      <LoginForm />
      <div className=" flex flex-col md:flex-row items-center justify-center pb-2">
        <p className="mb-0 mr-2">Don't have an account?</p>
        <Link to="/register" className="text-primary font-semibold">
          Sign up
        </Link>
      </div>
    </FormSection>
  );
};

export default Login;
