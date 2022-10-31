import Portal from "components/portal";
import Button from "components/button";
import { useState, Children, cloneElement } from "react";

export default function Modal({
  modalTitle,
  children,
  icon,
  text,
  iconSize,
  iconColor,
  background,
  width,
  open,
  setOpen,
}) {
  const [showModal, setShowModal] = useState(false);

  const handelCloseModal = () => {
    open && setOpen(!open);
    setShowModal(false);
  };

  return (
    <>
      <Button
        background={background}
        width={width}
        radius={"rounded"}
        onClick={() => setShowModal(true)}
        text={text}
        icon={icon}
        iconColor={iconColor}
        iconSize={iconSize}
      />
      {showModal ? (
        <Portal>
          <div className="md:rounded-2xl md:justify-center md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:w-fit w-full md:h-min h-full bg-grey2 m-auto">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="  border-0 rounded relative flex flex-col w-full text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-between justify-items-center p-5 ">
                  <h3 className="text-3xl font-semibold pr-10 hidden md:block">
                    {modalTitle}
                  </h3>
                  <div className="absolute top-0 right-3 ">
                    <Button
                      bg={"grey2"}
                      width={"w-min"}
                      onClick={() => handelCloseModal()}
                      icon={"CloseWindow"}
                      iconColor={"currentColor"}
                      iconSize={30}
                    />
                  </div>
                </div>
                <div className="relative pr-4 px-4 hidden md:block">
                  <hr />
                </div>
                {/*body*/}
                {Children.map(children, (child) =>
                  cloneElement(child, { setShowModal, open, setOpen })
                )}
              </div>
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
}
