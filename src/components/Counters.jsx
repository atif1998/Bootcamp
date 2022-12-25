import React, { useState } from "react";
import Counter from "./Counter";
import "./Counters.css";
const Counters = () => {
  const [count, setCount] = useState([
    { id: 1, value: 0 },
    // { id: 2, value: 0 },
    // { id: 3, value: 0 },
    // { id: 4, value: 0 },
    // { id: 5, value: 0 },
  ]);
  const handleIncrement = (countProp) => {
    // setCount((prev) => prev + 1)
    let countCopy = [...count];
    let counterIndex = countCopy.indexOf(countProp);
    let countObj = countCopy[counterIndex];
    countObj.value = countObj.value + 1;
    setCount(countCopy);
  };
  const handledecrement = (countProp) => {
    // if (count > 0)
    //   setCount((prev) => prev - 1)
    if (countProp.value <= 0) return;
    let countCopy = [...count];
    let counterIndex = countCopy.indexOf(countProp);
    let countObj = countCopy[counterIndex];
    countObj.value = countObj.value - 1;
    setCount(countCopy);
  };

  const handleDelete = (id) => {
    let filteredCounters = count.filter((obj) => obj.id !== id);
    setCount(filteredCounters);
  };
  const dynamicClasses = (countProp) => {
    let classes = "";
    if (countProp === 0) classes += " zero";
    else classes += " non-zero";
    return classes;
  };
  const formatCount = (countProp) =>
    countProp.value === 0 ? "zero" : countProp.value;

  return (
    <div className="App">
      {count.map((counter) => (
        <Counter
          number={counter}
          value={counter.id}
          key={counter.id}
          sum={handleIncrement}
          sub={handledecrement}
          classes={dynamicClasses}
          fcount={formatCount}
          remove={handleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
