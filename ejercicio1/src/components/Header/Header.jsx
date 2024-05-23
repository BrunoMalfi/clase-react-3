import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/book">Booking</Link>
        </span>
        <span>
          <Link to="/Menu">Menu</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;