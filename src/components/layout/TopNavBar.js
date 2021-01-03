import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "./Logo1.png";

const TopNavbar = () => {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <img src={Logo} height="65px" width="150px" alt="" />
      </div>
      <div className="rightSide">
        <div>
          <input type="text" placeholder="Search Here..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
