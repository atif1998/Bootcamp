import React, { useState, useEffect } from "react";

export const User = ({ onAfterSubmit }) => {
  const initialValues = { email: "", password: "" };
  const [formvalues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formvalues));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formvalues, [name]: value });
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [formErrors]);
  const validateForm = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex2 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
    if (!value.email) {
      errors.email = "email required";
    } else if (regex.test(value.email)) {
      errors.email = "Not a valid email";
    }
    if (!value.password) {
      errors.password = "password Required";
    } else if (regex2.test(value.password)) {
      errors.password = "password must be 8 character";
    }
    return errors;
  };

  return (
    <div className="Auth-form-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"> Succesful</div>
      ) : (
        <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
      )}

      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formvalues.email}
              className="form-control mt-1"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formvalues.passwprd}
              className="form-control mt-1"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default User;
