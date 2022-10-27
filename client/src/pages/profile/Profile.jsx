import Modal from "components/modal/Modal";
import ProfileForm from "./profileForm/ProfileForm";
import VerifyForm from "./verifyForm/VerifyForm";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "context/AuthProvider";
import Dropdown from "components/dropdown";
import "./Profile.css";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(user.photoURL);
  const inputFileRef = useRef(null);
  const formRef = useRef(null);

  return (
    <div className="w-full flex flex-col justify-around h-screen bg-gradient-to-b from-purpleDark to-black">
      <div className="flex flex-col md:pl-6 md:h-full mt-5 md:mt-5 ">
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold my-3 md:pb-8">
          Profile details
        </h1>
        <Dropdown />
        <ProfileForm
          formRef={formRef}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          inputFileRef={inputFileRef}
        />
        <div className="password-change__container md:h-full">
          <Modal
            modalTitle={"Verify account"}
            text={"Submit"}
            background={"bg-purple"}
          >
            <VerifyForm
              formRef={formRef}
              profileImage={profileImage}
              inputFileRef={inputFileRef}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
