import React, { useState } from "react";
import "./table.css";
import TableBody from "./TableBody";
import { TableHead } from "./TableHead";
import { Button } from "reactstrap";
import { Table } from "react-bootstrap";

const Tables = (props) => {
  const [items] = useState(["#", "Name", "Quantity", "Location", "Actions"]);
  const [table, setTable] = useState([
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" },
    { id: 4, name: "juice", quantitiy: 100, location: "freezer" },
  ]);
  const [input, setInput] = useState();
  const handleDelete = (id) => {
    let filteredCounters = table.filter((obj) => obj.id !== id);
    setTable(filteredCounters);
  };
  function getinput(event) {
    var inputValue = event.target.value;
    setInput(inputValue);
    console.log(setInput);
  }
  // function handleSearch() {
  //   let filteredtable = table.filter((user) => table.name.includes(user.input));
  //   setTable(filteredtable);
  // }
  function compareValue() {
    let filteredCounters = table.filter(
      (obj) =>
        obj.name === input ||
        obj.id === input ||
        obj.location === input ||
        obj.quantitiy === input
    );
    setTable(filteredCounters);
  }
  return (
    <>
      <Table className="table">
        <div className="container-fluid d-flex">
          <input
            role="search"
            class="form-control me-2"
            type="search"
            width={100}
            value={input}
            placeholder="Search"
            aria-label="Search"
            onChange={getinput}
          />
          <Button
            class="btn btn-outline-success"
            type="submit"
            onClick={() => compareValue()}
          >
            Search
          </Button>
        </div>
        <TableHead data={items} />
        <TableBody user={table} remove={handleDelete} />
      </Table>
    </>
  );
};

export default Tables;
