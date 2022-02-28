import React, { useRef, useState } from "react";

function RightSide(props) {
  const handleStatusAndData = props.handleStatusAndData;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(10);
  const [address, setAddress] = useState("");
  const pic = useRef();

  const handleButton = (e) => {
    e.preventDefault();
    handleStatusAndData();
  };
  return (
    <div>
      <div className="form-details">
        <h2>Please Fill This Form</h2>
        <form action="">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            cols="25"
            rows="3"
            placeholder="Write Your Address"
          ></textarea>
          <label htmlFor="pic">Photo</label>
          <input type="file" id="pic" name="pic" />
          <button type="submit" onClick={(e) => handleButton(e)}>
            Get Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightSide;
