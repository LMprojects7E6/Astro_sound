import React from "react";
import checkYourEmail from "assets/checkYourEmail.png";
import Logo from "components/logo";
import FormSection from "components/formSection";

const CheckEmail = () => {
  return (
    <FormSection imgUrl={checkYourEmail}>
      <div className="py-10">
        <Logo width={"w-28"} />
        <div className=" text-center mb-5">
          <h1 className="font-bold text-3xl">Check your mail</h1>
          <p className="py-2">
            We have sent a passord recover instructions you email.
          </p>
        </div>
      </div>
    </FormSection>
  );
};

export default CheckEmail;
