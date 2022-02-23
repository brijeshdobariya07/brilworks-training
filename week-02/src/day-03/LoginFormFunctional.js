import React, { useState } from "react";
import SuccessFunctional from "./SuccessFunctional";
import userData from "./data.json";

function LoginFormFunctional() {
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const hideShow = () => {
    setStatus(false);
    setMsg("");
  };

  const validateUser = (e) => {
    e.preventDefault();
    const findEmail = userData.filter((user) => user.email === typedEmail);
    const findPassword = userData.filter(
      (user) => user.password === typedPassword
    );

    if (findEmail.length) {
      if (findPassword.length) {
        if (findPassword[0].password === typedPassword) {
          setStatus(true);
          setMsg(findPassword[0].name);
        } else {
          setMsg("Invalid Password");
          setStatus(false);
        }
      } else {
        setMsg("Enter a valid Password");
        setStatus(false);
      }
    } else {
      findEmail.length === 0 && findPassword.length === 0
        ? setMsg("Wrong Credentials")
        : setMsg("No Such User");
      setStatus(false);
    }
  };

  return (
    <>
      {!status ? (
        <div id="container">
          <div className="form-details">
            <form action="">
              <h1 className="login-title">Functional Login</h1>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                onChange={(e) => setTypedEmail(e.target.value)}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={(e) => setTypedPassword(e.target.value)}
              />
              <br />
              <button type="submit" onClick={validateUser}>
                Submit
              </button>
            </form>
          </div>
          <div className="message">{msg}</div>
        </div>
      ) : (
        <SuccessFunctional msg={msg} callParentFunction={hideShow} />
      )}
    </>
  );
}

export default LoginFormFunctional;
