import React from "react";
const Input = ({
  type,
  name,
  placeholder,
  label,
  register,
  pattern,
  message,
}) => {
  return (
    <>
      <label className="text-s font-semibold px-1">{label}</label>
      <input
        type={type}
        {...register(name, {
          required: true,
          pattern: pattern,
          message: message,
        })}
        className="w-full pl-5 pr-5 py-2 rounded-lg border-2 border-gray-200  "
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
