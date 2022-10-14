import React from "react";
import Icon from "components/icons/Icons";

function Button({ bg, width, text, radius, type, onClick, icon }) {
  return (
    <>
      {icon ? (
        <button onClick={onClick}>
          <Icon name={icon} size={22} />
        </button>
      ) : (
        <button
          type={type}
          className={`${bg} ${width} ${radius} px-5 py-1 text-white font-semibold`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
