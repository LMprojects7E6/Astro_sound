import React from "react";
import Icon from "../../components/icons/Icons";

const HeaderLiked = () => {
  return (
    <h2 className="text-2xl m-2 text-white font-bold  mb-8 flex">
      Liked Songs{" "}
      <span className="mx-3">
        <Icon name={"heart"} size={24} color={"white"} />
      </span>
    </h2>
  );
};

export default HeaderLiked;