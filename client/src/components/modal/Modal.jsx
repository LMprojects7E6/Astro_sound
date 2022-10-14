import Button from "components/button";
import { useState, Children, cloneElement } from "react";

export default function Modal({ modalTitle, children, icon, text }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        bg={"mainButtonBg"}
        width={"w-min"}
        radius={"rounded"}
        onClick={() => setShowModal(true)}
        text={text}
        icon={icon}
      />

      {showModal ? (
        <>
          <div className="md:justify-center md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:w-fit w-full  md:h-min h-full top-0 left-0 md:left-1/4 md:top-1/4 bg-grey2 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" bg-grey2 border-0 rounded md:shadow-lg relative flex flex-col w-full text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-between justify-items-center p-5 ">
                  <h3 className="text-3xl font-semibold pr-10 hidden md:block">
                    {modalTitle}
                  </h3>
                  <Button
                    bg={"grey2"}
                    width={"w-min"}
                    onClick={() => setShowModal(false)}
                    text={"X"}
                  />
                </div>
                <div className="relative pr-4 px-4 hidden md:block">
                  <hr />
                </div>
                {/*body*/}
                {Children.map(children, (child) =>
                  cloneElement(child, { setShowModal })
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
