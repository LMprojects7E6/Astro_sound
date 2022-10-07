import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <section className="background_style h-full gradient-form md:h-screen">
      <div className="backGround_color_login min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div
          className=" bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
            <div className="md:flex w-full">
            <div className="container w-full md:w-1/2 px-5">
            <div className="w-100 justify-center">
                <img
                  className="img_logo m-auto"
                  src={require("../../../assets/img/logo_astro_sound.png")}
                  alt="logo"
                  style={{width:"108px"}}
                />
              </div>
              <div className="style_title text-center mb-10">
                <h1 className="flex justify-center font-bold text-gray-900 mb-2">
                  You music, your &nbsp;<p>Astro Sounds</p>!
                </h1>
                <p>See you on the other side!</p>
              </div>
              <form>
                <div>
                <div className="style_div_input flex flex-col items-center -mx-3">
                    <div className=" style_input w-1/2 mb-2">
                      <label htmlFor="" className="text-s text-black font-semibold px-1">
                        First name:
                      </label>
                      <div className="style_label flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John"
                          name="first_name"
                        />
                      </div>
                    </div>
                    <div className="style_input w-1/2 mb-2">
                      <label htmlFor="" className="text-s text-black font-semibold px-1">
                        Last name:
                      </label>
                      <div className="style_label flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Alderson"
                          name="last_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="style_div_input flex flex-col items-center -mx-3 ">
                    <div className="style_input w-1/2 mb-2">
                      <label htmlFor="" className="text-s text-black font-semibold px-1">
                        Email:
                      </label>
                      <div className="style_label flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="eliott1998@gmail.com"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="style_input w-1/2  mb-2">
                      <label htmlFor="" className="text-s font-semibold text-black px-1">
                        Password:
                      </label>
                      <div className="style_label flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="****************"
                          name="password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 my-5">
                      <button className="style_button_singUp block mb-2 mt-3 w-full max-w-xs mx-auto text-white rounded-lg px-3 py-3 font-semibold">
                        Sing up
                      </button>
                    </div>
                  <div className="style_margin_bottom flex items-center justify-center pb-2">
                    <p className="mb-0 mr-2">Already have an account?</p>
                      <a
                      href="#!"
                        className="style_color_a"
                      >
                        Sign up.
                      </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:block w-1/2 h-80 style_img_signin ">
              <img
                src={require("../../../assets/img/singin_img.png")}
                style={{width:"573px", height:"656px", left:"739px", top:"135px"}}
              />
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Signin;