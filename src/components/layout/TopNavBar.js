<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Logo from "./Logo1.png";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Logo from './Logo1.png';
>>>>>>> aa252266cc05f41ac6e1f5a6a2ea42b8d3201d02

const TopNavbar = () => (
  <div className="Navbar">
    <div className="leftSide">
<<<<<<< HEAD
      <img src={Logo} height="65px" width="190px" alt="" />
=======
      <img src={Logo} height="65px" width="150px" alt="" />
>>>>>>> aa252266cc05f41ac6e1f5a6a2ea42b8d3201d02
    </div>
    <div className="rightSide">
      <div>
        <input type="text" placeholder="Search Here..." />
        <button type="submit">
<<<<<<< HEAD
          <FaIcons.FaSearch />
=======
          <FaSearch />
>>>>>>> aa252266cc05f41ac6e1f5a6a2ea42b8d3201d02
        </button>
      </div>

      <div className="links">
<<<<<<< HEAD
        <Link to="/login" className="logoStyle">
          <AiIcons.AiOutlineLogin style={{ paddingRight: 5 }} />
          Login
        </Link>
        <Link to="/register" className="logoStyle">
          <FaIcons.FaRegRegistered style={{ paddingRight: 5 }} />
          Register
        </Link>
=======
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
>>>>>>> aa252266cc05f41ac6e1f5a6a2ea42b8d3201d02
      </div>
    </div>
  </div>
);

export default TopNavbar;
