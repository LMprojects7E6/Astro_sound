import { useMutation } from "@tanstack/react-query";
import { updateUser } from "api/users";
import { AuthContext } from "context/AuthProvider";
import { useContext } from "react";
import { convertFormData } from "utils/convertFormData";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const VerifyForm = ({
  formRef,
  profileImage: inputPicture,
  inputFileRef,
  setShowModal,
}) => {
  const navigate = useNavigate();
  const {
    reAuth,
    updatePhotoUrlProfile,
    updateEmailProfile,
    user,
    checkIfEmailExist,
  } = useContext(AuthContext);
  const currentPicture = user.photoURL;

  //!VERIFY CREDENTIALS
  const verifyCredentials = async (e) => {
    e.preventDefault();
    const { verifyEmail, verifyPassword } = convertFormData(e.target);
    try {
      await reAuth(verifyEmail, verifyPassword);
      uploadPhotoURL();
    } catch (error) {
      toast.error("Wrong email and password combination");
    }
  };

  //!UPLOAD TO CLOUDINARY
  const uploadPhotoURL = async () => {
    const data = new FormData(formRef.current);
    if (currentPicture !== inputPicture && inputFileRef.current.value) {
      mutate(data);
    }
    await updateEmail();
  };
  //!MUTATION
  const { mutate } = useMutation(updateUser, {
    onSuccess: async (data) => {
      await updatePhotoUrlProfile(data);
      inputFileRef.current.value = null;
      // toast.success("Profile picture updated!!");
    },
    onError: async () => {
      toast.error("Cannot update profile picture!!");
    },
  });

  //!UPDATE CHECK EMAIL

  const updateEmail = async () => {
    const { email } = convertFormData(formRef.current);
    try {
      await checkIfEmailExist(email);
      await updateEmailProfile(email);
      toast.success("Profile updated correctly!!");
      setShowModal(false);
    } catch (error) {
      toast.error("Cannot update the email!!");
    }
  };

  return (
    <>
    <hr className="mx-5"/>
    <form
      action=""
      className="flex flex-col mt-4 px-5 text-white"
      onSubmit={verifyCredentials}>
      <label>Email:</label>
      <input type="email" name="verifyEmail" required id="" className="rounded my-2 pl-1 text-black"/>
      <label>Password:</label>
      <input type="password" name="verifyPassword" required className="rounded my-1 pl-1 text-black"/>
      <div className="flex flex-row justify-center mt-3">
      <button type="submit" className="font-medium w-full py-1 mt-4 bg-purple2 rounded">
        VERIFY
      </button>
      </div>
    </form>
    </>
  );
};

export default VerifyForm;
