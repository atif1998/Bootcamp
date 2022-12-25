import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

import Tables from "./components/Tables";
import List from "./components/List";
import Counters from "./components/Counters";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import { Navbar } from "./components/Navbar";
import Login from "./components/Login";
import User from "./components/User";
import TodoList from "./components/Todolist";
import Gmail from "./components/Gmail";
import Inbox from "./components/Inbox";
import Other from "./components/Other";
import Spasm from "./components/Spasm";
import Book from "./components/Book";
import RegistraionForm from "./components/RegistraionForm";

const dummyExpense = [
  {
    id: "e1",
    title: "Books Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpense);
  const addExpenseHandler = (expense) => {
    //   setExpenses([expense, ...expenses])
    // }
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/list" element={<List />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Counters" element={<Counters />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Registrationform" element={<RegistraionForm />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Book/:id" element={<Book />} />

        <Route path="/Gmail" element={<Gmail />}>
          <Route path="/Gmail/inbox" element={<Inbox />} />
          <Route path="/Gmail/outbox" element={<Other />} />
          <Route path="/Gmail/spam" element={<Spasm />} />
        </Route>
      </Routes>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
