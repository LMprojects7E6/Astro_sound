import Modal from "components/modal/Modal";
import ProfileForm from "./profileForm/ProfileForm";
import VerifyForm from "./verifyForm/VerifyForm";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "context/AuthProvider";
import "./Profile.css";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";
import DashboardSection from "components/dashboardSection";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(user.photoURL);
  const inputFileRef = useRef(null);
  const formRef = useRef(null);
  const data = useQuery(["getSession"], getSession);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purpleDark to-black mobile:h-full mobile:w-full md:overflow-y-auto p-8">
      <div className="flex flex-col md:pl-6 md:h-full mt-5 md:mt-0">
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold my-3 md:my-0 md:pb-2">
          Profile details
        </h1>
        <ProfileForm
          formRef={formRef}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          inputFileRef={inputFileRef}
        />
        <div className="password-change__container md:h-full">
          <Modal
            modalTitle={"Verify account"}
            text={"Update Profile"}
            background={"bg-purple2"}
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
