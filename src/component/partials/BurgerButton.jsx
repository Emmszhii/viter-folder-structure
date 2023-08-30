import React from "react";

const BurgerButton = ({ handleShowNav, showNav }) => {
  return (
    <div
      className={`toggle__button ${showNav ? "active" : ""}`}
      onClick={handleShowNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
