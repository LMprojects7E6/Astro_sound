import React from "react";

function Button({ bg, width, text, radius, type }) {
  return (
    <button
      type={type}
      className={`${bg} ${width} ${radius} px-5 py-1 text-white font-semibold`}
    >
      {text}
    </button>
  );
}

export default Button;
