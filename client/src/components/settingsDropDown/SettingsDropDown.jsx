import Icon from "components/icons";

import { useState, useRef, Children, cloneElement } from "react";

const SettingsDropDown = ({ song, children }) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div>
        <div
          className=" cursor-pointer inline-flex w-full justify-center rounded-md  bg-grey5 px-4 py-2 text-sm font-medium  "
          onClick={() => {
            setOpen(true);
          }}
        >
          <Icon name={"dotsHorizontal"} size={24} color={"#fff"} />
        </div>
      </div>

      <div className="">
        <div
          className={`${
            open ? "active" : "inactive"
          } py-1 absolute md:bottom-10 md:right-0 bottom-0 right-5 z-10 mt-2 w-40 bg-grey5 text-white rounded-md border-2 border-white hover:text-grey  `}
        >
          <ul>
            {Children.map(children, (child) =>
              cloneElement(child, { song, setOpen, open })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsDropDown;
