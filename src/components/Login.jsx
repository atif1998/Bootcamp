import React, { useRef } from "react";
import { useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const nameField = useRef();
  const emailField = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit again");
    console.log("nameField:", nameField.current);
    console.log("nameField-value", nameField.current.value);
    console.log("emailField", emailField.current);
    console.log("emailfield-value", emailField.current.value);
  };
  useEffect(() => {
    console.log(nameField.current.focus());
    console.log(emailField.current.focus());
  }, [nameField]);

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form>
        <div>
          <h3>Login Form</h3>
        </div>
        <div>
          <input
            type="text"
            ref={nameField}
            name="name"
            placeholder="Enter name"
          />
        </div>
        <div>
          <input
            type="email"
            ref={emailField}
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <input
            type="number"
            name="phone number"
            placeholder="Enter contact."
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
