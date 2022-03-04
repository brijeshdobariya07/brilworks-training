import React from "react";

function Card(props) {
  const { fname, lname, age, address, pic } = props.data || {};
  const handleStatusAndData = props.handleStatusAndData;
  return (
    <div className="card-container">
      <div>
        <div>
          <div className="user-section-1">
            <div className="user-img">
              <img src={URL.createObjectURL(pic) || ""} alt="" />
            </div>
            <div>
              <h1>{fname}</h1>
              <h1>{lname}</h1>
              <h3>Age : {age}</h3>
            </div>
          </div>

          <div>
            <h3>Address : {address}</h3>
          </div>
          <div className="close-btn">
            <button onClick={() => handleStatusAndData()}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
