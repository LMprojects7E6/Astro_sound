import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "context/AuthProvider";
import Modal from "components/modal/Modal";
import PasswordChangeForm from "../passwordChangeForm/PasswordChangeForm";

const ProfileForm = ({
  formRef,
  profileImage,
  setProfileImage,
  inputFileRef,
}) => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(user.email);

  const handlePreview = (e) => {
    const profilePhoto = e.target.files[0];
    setProfileImage(URL.createObjectURL(profilePhoto));
  };
  return (
    <div className="flex flex-col h-full w-full items-center space-y-1">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:w-full md:items-center"
        ref={formRef}
      >
        <div className="flex flex-col items-center md:flex-col w-full">
          <label htmlFor="profileImage" className="md:flex md:h-full">
            {profileImage ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={profileImage}
                alt="profile photo"
                className="w-60 h-60 rounded-full"
              />
            ) : (
              <div className="w-32 h-32 bg-grey3 rounded-full"></div>
            )}
          </label>
        </div>
        <input
          className="hidden"
          type="file"
          name="profileImage"
          onChange={handlePreview}
          id="profileImage"
          ref={inputFileRef}
        />
        <div className="flex flex-col text-white md:items-center md:justify-center md:mt-5">
          <label className="font-medium pb-2 md:mr-64 md:pr-3">EMAIL:</label>
          <input
            className="rounded pl-2 text-black w-80 mb-2"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
        <div className="flex flex-col text-white w-80 md:w-10/12 md:pl-3">
          <div className="flex flex-col  md:w-full md:items-center">
            <label className="font-medium pb-2 md:mr-60">PASSWORD:</label>
            <input
              className="rounded pl-2 w-full md:w-80 mb-2 md:mr-2 md:mb-5"
              type="password"
              disabled={true}
              placeholder="**************"
            />
          </div>
        </div>
      <Modal
        modalTitle={"Change password"}
        text={"Change password"}
        background={"bg-purple"}
        width={"w-44"}
      >
        <div className="password-change__container">
          <PasswordChangeForm />
        </div>
      </Modal>
    </div>
  );
};

export default ProfileForm;
