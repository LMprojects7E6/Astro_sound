import React from "react";
import Icon from "components/icons";

function Button({
  bg,
  background,
  width,
  text,
  radius,
  type,
  onClick,
  icon,
  iconSize,
  iconColor,
}) {
  return (
    <>
      {icon ? (
        text ? (
          <button onClick={onClick} className="flex font-semibold bg-active hover:text-white mobile:flex mobile:flex-column mobile:items-center">
            <div className="flex flex-row items-center">
            <span className="px-5 pr-4 my-4">
              <Icon name={icon} size={iconSize} color={iconColor} />
            </span>
            {text }
            </div>
          </button>
        ) : (
          <button onClick={onClick}>
            <Icon name={icon} size={iconSize} color={iconColor} />
          </button>
        )
      ) : (
        <button
          type={type}
          className={`${bg} ${background} ${width} ${radius} px-5 py-1 text-white font-semibold`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
