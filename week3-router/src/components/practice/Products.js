import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" name="" id="" placeholder="search products" />
      </div>
      <br />
      <nav>
        {/* You can use "NavLink" from react-router-dom
            this will provide actice class functionality to the component
            which is rendering via routes

            Link or NavLink is similar to the <a> tag in HTML

            here we don't use "/" in Link's "to" attribute because it uses nested
            routes which uses relative path
        */}
        <Link to="featured">Featured Products</Link>
        <Link to="new">New Products</Link>
      </nav>
      {/* There are nested routes for this component e.g Products components
          and at the products route there are another child components if you
          want to show below any child component than use "Outlet" Component from
          react-router-dom
      */}
      <Outlet />
    </>
  );
};

export default Products;
