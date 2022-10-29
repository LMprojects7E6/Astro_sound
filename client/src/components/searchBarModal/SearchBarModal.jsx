import Portal from "components/portal";
import Button from "components/button";
import { useState, Children, cloneElement } from "react";
import Icon from "components/icons";

export default function SearchBarModal({ modalTitle, children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className=" flex items-center m-10 rounded-lg  lg:ml-80 bg-white  md:max-w-sm  "
        onClick={() => setShowModal(true)}
      >
        <span className="p-2">
          <Icon name={"search"} size={22} color={"currentColor"} />
        </span>
        <input
          className="outline-none appearance-none"
          placeholder="Search"
          readOnly
        />
      </div>

      {showModal ? (
        <Portal>
          <div className="fixed top-0 flex justify-center  items-center text-white z-10  h-full w-full ">
            <div className="bg-grey5 md:w-1/3 md:h-2/3 flex flex-col p-8 md:rounded-md h-full w-full">
              <div className="  flex flex-col">
                <div className=" relative md:flex-1 flex justify-between">
                  <h3 className="text-3xl font-semibold pr-10 hidden md:block">
                    {modalTitle}
                  </h3>
                  <div className="absolute top-0 right-0 ">
                    <Button
                      bg={"grey2"}
                      width={"w-min"}
                      onClick={() => setShowModal(false)}
                      icon={"CloseWindow"}
                      iconColor={"white"}
                      iconSize={30}
                    />
                  </div>
                </div>
                <hr className="mt-5 pr-4 px-4 hidden md:block" />
              </div>
              <div
                className="text-white h-full flex flex-col justify-around"
                style={{ flex: 2 }}
              >
                {Children.map(children, (child) =>
                  cloneElement(child, { setShowModal, showModal })
                )}
              </div>
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
}
