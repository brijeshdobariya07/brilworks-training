import React, { useRef, useState } from "react";

function RightSide(props) {
  const handleStatusAndData = props.handleStatusAndData;

  const [data, setData] = useState({
    fname: "",
    lname: "",
    age: "",
    address: "",
    pic: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(10);
  const [address, setAddress] = useState("");
  const pic = useRef();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleStatusAndData();
    console.log(data);
  };

  const validate = (e) => {
    const { name, value } = e.target;
    name !== "pic"
      ? setData((prev) => ({ ...prev, [name]: value }))
      : setData((prev) => ({ ...prev, [name]: e.target.files[0] }));
  };

  const handleAlert = () => {
    setAlert(false);
  };

  return (
    <div>
      <div className="form-details">
        <h2>Please Fill This Form</h2>
        <form action="">
          <div>
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => validate(e)}
            />
            {Boolean(firstName.length) || (
              <div className="input-err-msg">* Please fill out this field</div>
            )}
          </div>

          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lName"
              onChange={(e) => validate(e)}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={(e) => validate(e)}
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              cols="25"
              rows="3"
              placeholder="Write Your Address"
              onChange={(e) => validate(e)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="pic">Photo</label>
            <input
              type="file"
              id="pic"
              name="pic"
              onChange={(e) => validate(e)}
            />
          </div>

          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Get Details
          </button>
        </form>
      </div>

      <div className={alert ? "displayAlert" : "displayAlert hideAlert"}>
        <p className="alertMsg">This is Alert</p>
        <button onClick={handleAlert}>Close</button>
      </div>
    </div>
  );
}

export default RightSide;
