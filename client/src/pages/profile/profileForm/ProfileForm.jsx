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
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-col flex"
        ref={formRef}
      >
        PROFILE PHOTO:
        <label htmlFor="profileImage" className="w-32 h-32 ">
          {profileImage ? (
            <img src={profileImage} alt="profile photo" />
          ) : (
            <div className="w-32 h-32 bg-grey3 rounded-full"></div>
          )}
        </label>
        <input
          type="file"
          name="profileImage"
          onChange={handlePreview}
          id="profileImage"
          ref={inputFileRef}
        />
        EMAIL:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <div>
        PASSWORD:
        <input type="password" disabled={true} placeholder="**************" />
      </div>
      <Modal
        modalTitle={"Change password"}
        text={"Change password"}
        background={"bg-purple"}
      >
        <PasswordChangeForm />
      </Modal>
    </>
  );
};

export default ProfileForm;
