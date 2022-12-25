import React from "react";
import { Button } from "reactstrap";
import "./Counters.css";
const Counter = ({ number, value, sum, sub, classes, remove, fcount }) => {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <span className={classes(number.value)}>{fcount(number)}</span>
        <Button
          className="button1"
          onClick={() => {
            sum(number);
          }}
        >
          +
        </Button>
        <br />
        <Button
          className="button2"
          onClick={() => {
            sub(number);
          }}
        >
          -
        </Button>
        <Button onClick={() => remove(value)}>Delete Counter</Button>
      </div>
    </>
  );
};
export default Counter;
// count === 0 ? "zero" : "non-zero"
// number.value === 0 ? "zero" : "non-zero"
// number.value === 0 ? "zero" : number.value
