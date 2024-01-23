import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link className="logo-container" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/TLC_Logo.svg"
              alt="tlc logo"
            />
          </Link>
          <Link className="nav-link" to="/">
            <span>REALITÁS</span>
          </Link>
          <Link className="nav-link" to="/">
            <span>Series</span>
          </Link>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="User Profile Image"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
