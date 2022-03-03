import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import "./style.css";
import OrderDetails from "./OrderDetails";
import NoMatch from "./NoMatch";
import Products from "./Products";
import FeatureProducts from "./FeatureProducts";
import NewProducts from "./NewProducts";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderDetails />} />

        {/* For Nested Routes wrap up route in one route */}
        <Route path="products" element={<Products />}>
          {/* If you are doing nested routes and at the parent e.g. products route
            You want to show one specific child from child components route than
            make add index property in one route and define element you want show
            
            You dont have to specifie "/" for child routes path attribute
          */}
          <Route index element={<FeatureProducts />} />
          <Route path="featured" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        <Route path="users" element={<Users />}>
          {/* For Dynamic Path Use ":any-name" */}
          <Route path=":userId" element={<UserDetails />} />
          {/* Here Dynamic path will not work because react will choose most specific path */}
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* If the path will not found or match than this specific component will be rendered */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Main;
