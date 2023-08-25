import React from "react";
import Logo from "../svg/logo";

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-2 px-6">
        <Logo />
        <div className="flex items-center gap-3">
          <ul>
            <li className="leading-snug">Emms</li>
            <li>
              <small>Developer</small>
            </li>
          </ul>
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="rounded-full object-cover object-center"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
