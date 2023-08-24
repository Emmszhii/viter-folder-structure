import { BiSolidTime } from "react-icons/bi";
import { FaHome, FaTools, FaUserCog, FaUserTie, FaCog } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className="nav__link">
            <a href="#">
              <FaHome />
              Home
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <FaTools /> Tools
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <BiSolidTime />
              Time Entry
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <FaUserCog />
              Staff
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <FaUserTie />
              Client
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <FaCog />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
