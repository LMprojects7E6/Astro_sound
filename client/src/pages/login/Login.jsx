import React from 'react'
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <section className="background_style h-full gradient-form md:h-screen">
      <div className="backGround_color_login min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
            <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="w-100 justify-center">
                <img
                  className="img_logo m-auto"
                  src={require("../../assets/img/logo_astro_sound.png")}
                  alt="logo"
                  style={{width:"108px"}}
                />
              </div>
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 mb-2">
                  Welcome back!
                </h1>
                <p>Welcome to Astro sounds! Entre your credentials.</p>
              </div>
              <form>
                <div>
                  <div className="flex ">
                    <div className="style_email w-full px-3 mb-5">
                      <label htmlFor="" className="text-s font-semibold px-1">
                        Email
                      </label>
                      <div className="flex mt-3">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Entre your email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="style_label w-full px-3 mb-5">
                      <label htmlFor="" className="text-s font-semibold">
                        Password
                      </label>
                      <div className="flex mt-3">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          name="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="*************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="style_forgot_password w-full px-3 mb-5 text-right">
                      <a href="#!">
                        Forgot password
                      </a>
                      <button className="style_button_singUp block mb-2 mt-3 w-full max-w-xs mx-auto text-white rounded-lg px-3 py-3 font-semibold">
                        Sing up
                      </button>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center pb-2">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                      <a
                      href={require('./components/Signin')}
                        className="style_color_a"
                      >
                        Sign up
                      </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:block w-1/2 h-80 ">
              <img
                src={require("../../assets/img/login_img.png")}
                style={{width:"573px", height:"656px", left:"739px", top:"135px"}}
              />
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Login