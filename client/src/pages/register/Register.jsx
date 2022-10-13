import React from 'react'
import RegisterSection from '../../components/registerSection/RegisterSection'
import loginImage from "assets/register.png";
import Logo from "components/logo";
import RegisterForm from "../../pages/register/registerForm/RegisterForm"
import { Link } from "react-router-dom";

const Register = () => {

  return (
    <RegisterSection imgUrl={loginImage}>
        <Logo width={"w-28"} />
      <div className=" text-center mb-10">
        <h1 className="font-bold text-xl ">Your music, your <span className='text-primary'>Astro Sounds!</span></h1>
        <p>See you on the other side!</p>
      </div>
      <RegisterForm />
      <div className=" flex items-center justify-center pb-2">
        <p className="mb-0 mr-2">Already have an account?</p>
        <Link to="/" className="text-primary font-semibold">
          Sign in.
        </Link>
      </div>
    </RegisterSection>
  )
}

export default Register
