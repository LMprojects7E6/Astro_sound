import React from "react";
import Icon from "components/icons";

function Button({
  bg,
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
          <button onClick={onClick} className="flex">
            <span className="px-4 pr-4">
              <Icon name={icon} size={iconSize} color={iconColor} />
            </span>
            {text}
          </button>
        ) : (
          <button onClick={onClick}>
            <Icon name={icon} size={iconSize} color={iconColor} />
          </button>
        )
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
