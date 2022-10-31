import React, { useContext, useEffect } from "react";
import checkYourEmail from "assets/checkYourEmail.png";
import Logo from "components/logo";
import FormSection from "components/formSection";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthProvider";

const CheckEmail = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <FormSection imgUrl={checkYourEmail}>
      <div className="py-10">
        <Logo width={"w-28"} />
        <div className=" text-center mb-5">
          <h1 className="font-bold text-3xl">Check your email</h1>
          <p className="py-2">
            We have sent a password recover instructions you email.
          </p>
          <div className=" flex flex-col md:flex-row items-center justify-center pb-2"></div>
        </div>
      </div>
    </FormSection>
  );
};

export default CheckEmail;
