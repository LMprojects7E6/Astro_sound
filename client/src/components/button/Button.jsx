import React from "react";

function Button({ bg, width, text, radius, type, onClick }) {
  return (
    <button
      type={type}
      className={`${bg} ${width} ${radius} px-5 py-1 text-white font-semibold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
