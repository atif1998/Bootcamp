import React, { useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
  const [list] = useState([
    "Biology",
    "Chemistry",
    "MAths",
    "physics",
    "english",
  ]);
  return (
    <div className="container mt-5 mb-5">
      <h2>List Example</h2>
      <ol className="list-group">
        <li>
          {list.map((x, index) => (
            <div>
              <Link id={index} to={`./id`}>
                {x}
              </Link>
              id={index}
            </div>
          ))}
        </li>
      </ol>
    </div>
  );
};

export default Book;
