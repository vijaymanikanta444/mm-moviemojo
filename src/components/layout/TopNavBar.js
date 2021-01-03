import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Logo from "./Logo1.png";

const TopNavbar = () => (
  <div className="Navbar">
    <div className="leftSide">
      <img src={Logo} height="65px" width="190px" alt="" />
    </div>
    <div className="rightSide">
      <div>
        <input type="text" placeholder="Search Here..." />
        <button type="submit">
          <FaIcons.FaSearch />
        </button>
      </div>

      <div className="links">
        <Link to="/login" className="logoStyle">
          <AiIcons.AiOutlineLogin style={{ paddingRight: 5 }} />
          Login
        </Link>
        <Link to="/register" className="logoStyle">
          <FaIcons.FaRegRegistered style={{ paddingRight: 5 }} />
          Register
        </Link>
      </div>
    </div>
  </div>
);

export default TopNavbar;
