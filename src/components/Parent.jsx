import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import Child from "./Child";

const Parent = () => {
  const [number, setNumber] = useState();
  useEffect(() => console.log("useeffect")[number]);
  const handleCount = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <Child name="testing" id="1">
        <p>shjak</p>
        <Button>Addition</Button>
      </Child>
      <button onClick={handleCount}> numer</button>
    </div>
  );
};

export default Parent;
