import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        {/* Here We have to use "/" for navigation because navigation uses absolute path */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
