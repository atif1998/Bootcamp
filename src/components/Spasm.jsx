import React from "react";
import { useReducer } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { initialState, reducer } from "./script";

const Spasm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements, "Spasms");
    const { firstName, lastName, userName, email } = e.target.elements;

    const payload = {
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      email: email.value,
    };
    const action = {
      payload,
      type: "changeValue",
    };
    dispatch(action);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">FirstName</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="FirstName"
            type="text"
            value={state.firstName}
            onChange={(e) =>
              dispatch({
                type: "changeValue",
                field: e.target.name,
                value: e.target.value,
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">LastName</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="LastName"
            type="text"
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "changeValue",
                field: e.target.name,
                value: e.target.value,
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">username</Label>
          <Input
            id="userName"
            name="userName"
            placeholder="userName"
            type="text"
            value={state.userName}
            onChange={(e) =>
              dispatch({
                type: "changeValue",
                field: e.target.name,
                value: e.target.value,
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "changeValue",
                field: e.target.name,
                value: e.target.value,
              })
            }
          />
        </FormGroup>

        <Button>Submit</Button>
        <Button onClick={() => dispatch({ type: "reset" })}> reset</Button>
      </Form>
    </div>
  );
};

export default Spasm;
