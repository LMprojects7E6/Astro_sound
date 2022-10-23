import Icon from "components/icons";
import Modal from "components/modal/Modal";
import AddToPlaylist from "components/playlistModals/addToPlaylist";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Portal from "components/portal";

const SongDropDown = ({ song }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-grey5 px-4 py-2 text-sm font-medium  ">
          <Icon name={"dotsHorizontal"} size={24} color={"#fff"} />
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
        <Menu.Items className="relative ">
          <div className="py-1 absolute md:bottom-10 md:right-0 bottom-0 right-5 z-10 mt-2 w-40 bg-grey5 text-white rounded-md border-2 border-white hover:text-grey ">
            <Menu.Item>
              {({ active }) => (
                <Portal id={"portal"}>
                  <Modal
                    background={"bg-grey5"}
                    modalTitle={"Add to playlist"}
                    text={"Add to playlist"}
                  >
                    <AddToPlaylist />
                  </Modal>
                </Portal>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SongDropDown;
