import React from "react";

export const TableHead = ({ data }) => {
  return (
    <thead>
      {data.map((counter, index) => (
        <th key={index} scope="col">
          {counter}
        </th>
      ))}
    </thead>
  );
};
