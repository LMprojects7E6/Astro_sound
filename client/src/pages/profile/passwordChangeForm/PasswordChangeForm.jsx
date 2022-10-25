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
    <form
      className="flex flex-col mt-3 px-5 text-black"
      onSubmit={updatePassword}
    >
      email:
      <input type="email" name="verifyEmail" id="" />
      password:
      <input type="password" name="verifyPassword" />
      New password:
      <input type="password" name="newPassword" />
      <button type="submit" className="bg-purple-500">
        VERIFY
      </button>
    </form>
  );
};

export default PasswordChangeForm;
