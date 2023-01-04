import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="Counter1"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Counter1
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="List"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Tables" className="nav-link" href="#">
            Tables
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Cards" className="nav-link" href="#">
            Cards
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Counters" className="nav-link">
            Shoping-Card
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Login" className="nav-link">
            Login Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="User" className="nav-link">
            Login Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="TodoLsit" className="nav-link">
            TodoList
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Registrationform" className="nav-link">
            Registration Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Book" className="nav-link">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Gmail" className="nav-link">
            Gmail
          </Link>
        </li>
      </ul>
    </div>
  );
};
