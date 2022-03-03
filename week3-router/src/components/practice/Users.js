import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  // We can Use "useSearchParams" Hook if we want any modification in
  // query params e.g "?active-users=true" in path
  // It behaves exactly like useState Hook

  //   It return an array similar to useState; one is initial params and second is function in
  // which we can modify it
  const [searchParams, setSearchParams] = useSearchParams();
  //   Here we are storing a boolean value based on is searchParams has filter attribute
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <Link to="1">User 1</Link>
      <br />
      <Link to="2">User 2</Link>
      <br />
      <Link to="3">User 3</Link>
      <br />
      <Outlet />

      <div>
        {/* In onClick method we are calling "setSearchParams" to modify searchParams
                it receives an object which property will be added at last of path
                e.g. localhost:3000/users/2 => will be => localhost:3000/users/2?filter=true 
          */}
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        {/* Here it will be reset to original
            localhost:3000/users/2?filter=true => will be =>  localhost:3000/users/2 
        */}
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <div>Showing active users</div>
      ) : (
        <div>Showing all users</div>
      )}
    </div>
  );
};

export default Users;
