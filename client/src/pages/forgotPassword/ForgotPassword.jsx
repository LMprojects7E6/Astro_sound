import { AuthContext } from "context/AuthProvider";
import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { convertFormData } from "utils/convertFormData";

const ForgotPassword = () => {
  const { user, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = convertFormData(e.target);
    try {
      await forgotPassword(email);
      toast.success("Email sent!!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        EMAIL:
        <input type="email" name="email" className="border" />
        <button type="submit" className="bg-purple">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
