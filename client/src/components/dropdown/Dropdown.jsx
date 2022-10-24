import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icons from "components/icons";
import Logout from "components/button/Logout";
import { Link } from "react-router-dom";
import ImageProfile from "components/imageProfile";
import { getSession} from "api/session";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Dropdown = ({ admin }) => {
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isUserError,
    error: userError,
  } = useQuery(["user"], getSession);

  console.log({user});

  if (isLoadingUser) {
    return <p>Loading...</p>;
  } else if (isUserError) {
    toast.error(userError);
  } else {
    return (
      <Menu as="div" className="absolute right-2 top-3 mr-1  md:right-7 z-10">
        <div className="flex flex-row items-center">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-grey2 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            <ImageProfile name={"userImage"} size={22} />
            {user}
            <Icons name={"downDir"} size={20} color={"currentColor"} />
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-grey2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-3">
              {!admin && (
                <>
                  <Menu.Item>
                    <Link
                      to={"profile"}
                      className="text-white hover:text-grey  pl-5  cursor-pointer"
                    >
                      Profile
                    </Link>
                  </Menu.Item>
                  <hr className="text-grey mx-2 my-2" />{" "}
                </>
              )}
              <Menu.Item>
                <Logout className="text-white hover:text-grey pl-5  cursor-pointer" />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
};

export default Dropdown;
