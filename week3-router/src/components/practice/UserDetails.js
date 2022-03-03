import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // You can access current url varibles e.g ":userId" using "useParams" Hook
  const params = useParams();
  //   we can also store :userId in variable e.g const userid = params.userId

  return (
    <div className="user-details">
      {/* You just have to access all the parameters of the path using
            params.variable_name from the params variable which we have defined 
            using useParams Hook
            and we can access it in JSX
      */}
      Details about User {params.userId}
    </div>
  );
};

export default UserDetails;
