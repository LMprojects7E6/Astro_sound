import { AuthContext } from "context/AuthProvider";
import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { convertFormData } from "utils/convertFormData";
import FormSection from "components/formSection";
import forgotPassImage from "assets/forgotPassword.png";
import Logo from "components/logo";
import Button from "components/button";

const ForgotPassword = () => {
  const { user, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = convertFormData(e.target);
    try {
      await forgotPassword(email);
      toast.success("Email sent!!");
      navigate("/checkEmail");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <FormSection imgUrl={forgotPassImage}>
      <div className="py-10">
        <Logo width={"w-28"} />
        <div className=" text-rigth mb-5">
          <h1 className="font-bold text-3xl">Reset password</h1>
          <p className="py-2">
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <label className="text-s font-semibold px-1">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full pl-5 pr-5 py-2 mb-5 rounded-lg border-2 border-gray-200  "
          />
          <div className=" flex flex-col md:flex-row items-center justify-center pb-2">
            <Button
              bg={"mainButtonBg"}
              width={"w-full"}
              radius={"rounded"}
              text={"Send Instructions"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </FormSection>
  );
};

export default ForgotPassword;
