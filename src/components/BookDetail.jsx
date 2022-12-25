import React from "react";
import { useParams } from "react-router-dom";

export const BookDetail = ({ index, text }) => {
  const id = useParams();
  return (
    <div className="container">
      <li>
        {text}
        <h2>this in new book</h2>
        <h2>this is old book</h2>
      </li>
    </div>
  );
};
export default BookDetail;
