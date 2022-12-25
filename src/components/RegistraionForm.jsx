import { useState } from "react";
import { Input } from "./Input";

export const Registrationform = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    } else {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    }
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    validateProperty(event.target.name, event.target.value);
  };
  const validateProperty = (propertyName, propertyValue) => {
    if (propertyName === "")
      setFormErrors({
        ...formErrors,
        [propertyName]: `${propertyName} is required`,
      });
    if (propertyValue === "")
      setFormErrors({
        ...formErrors,
        [propertyValue]: `${propertyValue} is required`,
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        {
          Object.keys(formErrors).length === 0 ? (
            <div className="ui message success"> Succesful</div>
          ) : (
            "sdfhgfdsa"
          )

          // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
        <form>
          <div>
            <h3>Login Form</h3>
          </div>
          <div>
            <Input
              label="Email"
              type="text"
              value={formValues.email}
              name="email"
              onChanged={handleChange}
            />
            <Input
              label="password"
              type="password"
              value={formValues.password}
              name="password"
              onChanged={handleChange}
            />
          </div>

          {/* <div>
          <input
            type={passwordShown ? "text" : "password"}
            value={formValues.password}
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          
        </div> */}
          <div>
            <checkedme type="checkbox" label="checkbox" name="checkbox">
              check me out
            </checkedme>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registrationform;
