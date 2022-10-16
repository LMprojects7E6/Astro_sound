import React from "react";
import Icon from "components/icons";

function Button({ bg, width, text, radius, type, onClick, icon }) {
  return (
    <>
      {icon ? (
        <button onClick={onClick} className="flex">
          <span className="px-4 pr-4">
            <Icon name={icon} size={22} />
          </span>
          {text}
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
