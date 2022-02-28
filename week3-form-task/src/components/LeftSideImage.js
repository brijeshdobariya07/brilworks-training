import React from "react";

function LeftSideImage() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "form-left-side.jpg"}
        alt=""
        className="left-img"
      />
    </div>
  );
}

export default LeftSideImage;
