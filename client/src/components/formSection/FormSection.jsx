import React from "react";

const FormSection = ({ children, imgUrl }) => {
  return (
    <main className="bg-purple w-screen h-screen  overflow-auto ">
      <section className=" p-10 flex h-screen ">
        <div className=" rounded-3xl shadow-xl overflow-hidden flex  lg:w-6/12 inset-0 m-auto">
          <div className=" bg-white w-full md:w-1/2 p-10 md:px-10  ">
            {children}
          </div>
          <div
            className="hidden md:block w-1/2  bg-cover bg-no-repeat bg-center "
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        </div>
      </section>
    </main>
  );
};

export default FormSection;
