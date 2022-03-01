import React, { useEffect, useRef, useState } from "react";

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
  const picFile = useRef("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setData({
      fname: firstName,
      lname: lastName,
      age: age,
      address: address,
      pic: picFile?.current.files[0],
    });
  }, [firstName, lastName, age, address, picFile]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    const nameRegx = /^[a-zA-Z]{0,20}$/;
    const numRegx = /^\d+$/;

    switch (name) {
      case "fname":
        if (nameRegx.test(value) && value !== null) {
          setFirstName(value);
        }
        break;

      case "lname":
        if (nameRegx.test(value) && value !== null) {
          setLastName(value);
        }
        break;

      case "age":
        if (
          numRegx.test(value) &&
          value >= 10 &&
          value <= 100 &&
          value !== null
        ) {
          setAge(value);
        }
        break;

      case "address":
        if (value.length <= 240 && value !== null) {
          setAddress(value);
        }
        break;

      case "pic":
        setData((item) => ({ ...item, pic: picFile.current.files[0] }));
        break;

      default:
    }
  };

  const handleAlert = () => {
    setAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFile = picFile.current.files.length;
    if (firstName && lastName && address && isFile) {
      handleStatusAndData(data);
    } else {
      setAlert(true);
    }
  };

  return (
    <div>
      <div className="form-details">
        <h2>Please Fill This Form</h2>
        <form action="">
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => handleInput(e)}
            />
            {Boolean(firstName.length < 20) || (
              <div className="input-err-msg">
                * Max Character length is 20 & Numbers are not allowed{" "}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => handleInput(e)}
            />
            {Boolean(lastName.length < 20) || (
              <div className="input-err-msg">
                * Max Character length is 20 & Numbers are not allowed
              </div>
            )}
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => handleInput(e)}
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              value={address}
              id="address"
              cols="25"
              rows="3"
              placeholder="Write Your Address"
              onChange={(e) => handleInput(e)}
            ></textarea>
            {Boolean(address.length < 240) || (
              <div className="input-err-msg">* Max Character length is 240</div>
            )}
          </div>

          <div>
            <label htmlFor="pic">Photo</label>
            <input
              type="file"
              id="pic"
              name="pic"
              ref={picFile}
              onChange={(e) => handleInput(e)}
            />
          </div>

          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>

      <div className={alert ? "displayAlert" : "displayAlert hideAlert"}>
        <p className="alertMsg">Please Fill all the fields</p>
        <button onClick={handleAlert}>Close</button>
      </div>
    </div>
  );
}

export default RightSide;
