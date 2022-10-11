import React from "react";
<<<<<<< HEAD
import RegisterSection from "../../components/registerSection/RegisterSection";
import loginImage from "assets/register.png";
import Logo from "components/logo";
import RegisterForm from "../../pages/register/registerForm/RegisterForm";
=======

import loginImage from "assets/register.png";
import Logo from "components/logo";
import RegisterForm from "pages/register";
>>>>>>> 44b01eb0ac0f9ee0621b1397f4b06aeb51bc83d1
import { Link } from "react-router-dom";
import FormSection from "components/formSection";

const Register = () => {
  return (
<<<<<<< HEAD
    <RegisterSection imgUrl={loginImage}>
=======
    <FormSection imgUrl={loginImage}>
>>>>>>> 44b01eb0ac0f9ee0621b1397f4b06aeb51bc83d1
      <Logo width={"w-28"} />
      <div className=" text-center mb-10">
        <h1 className="font-bold text-xl ">
          Your music, your <span className="text-primary">Astro Sounds!</span>
        </h1>
        <p>See you on the other side!</p>
      </div>
      <RegisterForm />
      <div className=" flex items-center justify-center pb-2">
        <p className="mb-0 mr-2">Already have an account?</p>
        <Link to="/" className="text-primary font-semibold">
          Sign up
        </Link>
      </div>
<<<<<<< HEAD
    </RegisterSection>
=======
    </FormSection>
>>>>>>> 44b01eb0ac0f9ee0621b1397f4b06aeb51bc83d1
  );
};

export default Register;
