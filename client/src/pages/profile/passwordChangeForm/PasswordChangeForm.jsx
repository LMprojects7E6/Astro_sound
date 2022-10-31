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
    <hr className="mx-4 mb-5"/>
    <form
      className="flex flex-col mt-3 px-5 text-black"
      onSubmit={updatePassword}>
      <label className="text-white mb-1">Email:</label>
      <input type="email" name="verifyEmail" id="" className="rounded py-1 pl-1 mb-3"/>
      <label className="text-white mb-1">Password:</label>
      <input type="password" name="verifyPassword" className="rounded py-1 pl-1 mb-3"/>
      <label className="text-white mb-1">New password:</label>
      <input type="password" name="newPassword" className="rounded py-1 pl-1 mb-3"/>
      <div className="flex flex-row justify-center py-1 bg-purple2 rounded-lg mt-8">
        <button type="submit" className=" font-medium text-white ">
          VERIFY
        </button>
      </div>
    </form>
      
    </div>
  );
};

export default PasswordChangeForm;
