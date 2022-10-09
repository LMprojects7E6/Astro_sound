import React from "react";
import { TbAlertCircle } from "react-icons/tb";

const ErrorParagraph = ({ children }) => {
  return (
    <p className="bg-error px-2 p-1 m-1 rounded text-error flex  justify-between justify-items-center ">
      {children}
      <TbAlertCircle className="mt-1" />
    </p>
  );
};

export default ErrorParagraph;
