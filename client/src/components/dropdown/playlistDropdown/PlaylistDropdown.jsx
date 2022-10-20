import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icons from "components/icons";
import { Link } from "react-router-dom";
import Logout from "components/button/Logout";

const PlaylistDropdown = () => {
  return (
    <Menu as="div" className="flex">
      <div className="relative flex flex-row items-center">
        <Menu.Button className="inline-flex w-full justify-center rounded-md  pr-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <Icons name={"DotsMenuIcon"} size={20} color={"currentColor"} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bottom-0 right-0 z-10 mt-0  origin-top-right rounded-md bg-grey2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3">
            <Menu.Item>
              <Icons name={"DotsMenuIcon"} />
            </Menu.Item>
            <hr className="text-grey mx-2 my-2" />
            <Menu.Item>
              <Icons name={"DotsMenuIcon"} />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PlaylistDropdown;
