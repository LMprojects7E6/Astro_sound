import { useMutation } from "@tanstack/react-query";
import { updateUser } from "api/users";
import Icon from "components/icons/Icons";
import Modal from "components/modal/Modal";
import { AuthContext } from "context/AuthProvider";

import React, { useContext, useRef, useState } from "react";

const Profile = () => {
  const formRef = useRef(null);
  const { user, reAuth } = useContext(AuthContext);
  const [email, setEmail] = useState(user?.email);
  const [profileImagePreview, setProfileImagePreview] = useState(
    user?.photoUrl
  );
  const { mutate } = useMutation(updateUser, {
    onSuccess: () => {
      console.log("UPDATED");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const uploadChanges = () => {
    const data = new FormData(formRef.current);
    // const dataForm = Object.fromEntries(data);
    mutate(data);
  };
  const handlePreview = (e) => {
    const profilePhoto = e.target.files[0];
    setProfileImagePreview(URL.createObjectURL(profilePhoto));
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const { verifyEmail, verifyPassword } = Object.fromEntries(dataForm);
    console.log(verifyEmail, verifyPassword);
    try {
      await reAuth(verifyEmail, verifyPassword);
      console.log("Auth correctly");
      uploadChanges();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full justify-center flex h-full items-center">
      <div className="">
        <h1 className="text-2xl">Profile details</h1>
        <form action="" className="flex-col flex" ref={formRef}>
          PROFILE PHOTO:
          <label htmlFor="profileImage" className="w-32 h-32 ">
            {profileImagePreview ? (
              <img src={profileImagePreview} alt="profile photo" />
            ) : (
              <div className="w-32 h-32 bg-gray-600 rounded-full"></div>
            )}
          </label>
          <input
            type="file"
            name="profileImage"
            onChange={handlePreview}
            id="profileImage"
          />
          EMAIL:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          PASSWORD:
          <input
            type="password"
            name="password"
            value={null}
            placeholder="********"
          />
        </form>
        <Modal modalTitle={"Verify account"} text={"Submit"}>
          <form
            action=""
            className="flex flex-col mt-3 px-5 text-black"
            onSubmit={handleVerify}
          >
            email:
            <input type="email" name="verifyEmail" id="" />
            password:
            <input type="password" name="verifyPassword" />
            <button type="submit" className="bg-purple-500">
              VERIFY
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
