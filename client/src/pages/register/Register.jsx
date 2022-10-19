import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";

import loginImage from "assets/register.png";
import Logo from "components/logo";
import RegisterForm from "./registerForm/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import FormSection from "components/formSection";
<<<<<<< HEAD
import { AuthContext } from "hooks/context/AuthProvider";
=======
import { AuthContext } from "context/AuthProvider";
import Loader from "components/loader/Loader";
>>>>>>> develop

const Register = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { isLoading, data } = useQuery(["getSession"], getSession);

  useEffect(() => {
    if (user && isLoading) {
      return <Loader></Loader>;
    }

    if (user && data) {
      navigate("/", { replace: true });
    }
  }, [data]);

  return (
    <FormSection imgUrl={loginImage}>
      <Logo width={"w-28"} />
      <div className=" text-center mb-10">
        <h1 className="font-bold text-xl ">
          Your music, your <span className="text-primary">Astro Sounds!</span>
        </h1>
        <p>See you on the other side!</p>
      </div>
      <RegisterForm />
      <div className=" flex flex-col md:flex-row items-center justify-center pb-2">
        <p className="mb-0 mr-2">Already have an account?</p>
        <Link to="/login" className="text-primary font-semibold">
          Sign in
        </Link>
      </div>
    </FormSection>
  );
};

export default Register;
