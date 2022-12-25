import React from "react";
import "./table.css";

export const TableBody = ({ user, remove }) => {
  return (
    <tbody>
      {user.length !== 0
        ? user.map((user, index) => (
            <tr key={index} className={user.id % 2 === 0 ? "even" : "odd"}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.quantitiy}</td>
              <td>{user.location}</td>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => remove(user.id)}
              >
                Delete
              </button>
            </tr>
          ))
        : "No Record Found"}
    </tbody>
  );
};
export default TableBody;
