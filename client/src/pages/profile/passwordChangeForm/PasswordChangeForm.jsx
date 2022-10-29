import { AuthContext } from "context/AuthProvider";
import { useContext } from "react";
import { convertFormData } from "utils/convertFormData";
import { toast } from "react-hot-toast";

const PasswordChangeForm = ({ setShowModal }) => {
  const { reAuth, updatePasswordProfile } = useContext(AuthContext);
  const updatePassword = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { verifyEmail, verifyPassword, newPassword } = convertFormData(form);
    try {
      await reAuth(verifyEmail, verifyPassword);
      await updatePasswordProfile(newPassword);
      toast.success("Password updated successfully!!");
      setShowModal(false);
    } catch (error) {
      toast.error("Wrong email and password combination");
    }
  };
  return (
    <div className="bg-grey2 ">
    <form
      className="flex flex-col mt-3 px-5 text-black space-y-3"
      onSubmit={updatePassword}>
      <label className="text-white">Email:</label>
      <input type="email" name="verifyEmail" id="" className="rounded pl-1"/>
      <label className="text-white">Password:</label>
      <input type="password" name="verifyPassword" className="rounded pl-1" />
      <label className="text-white">New password:</label>
      <input type="password" name="newPassword" className="rounded pl-1" />
    </form>
      <div className="flex flex-row justify-center py-1 bg-purple2 rounded-lg mt-8">
        <button type="submit" className=" font-medium text-white">
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
