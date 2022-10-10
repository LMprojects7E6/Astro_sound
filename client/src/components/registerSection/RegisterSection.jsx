import React from 'react'

const RegisterSection = ({ children, imgUrl }) => {
  return (
    <section className="bg-purple min-w-screen min-h-screen ">
      <div className=" rounded-3xl shadow-xl overflow-hidden flex absolute h-max w-6/12 inset-0 m-auto">
        <div className=" bg-white w-full md:w-1/2 p-10 md:px-10  ">
          {children}
        </div>
        <div
          className="hidden md:block w-1/2  bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
    </section>
  )
}

export default RegisterSection