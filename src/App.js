import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Headphones",
    amount: 149.99,
    date: new Date(2020, 3, 9),
  },
  {
    id: "e2",
    title: "Christmas presents",
    amount: 196.12,
    date: new Date(2020, 11, 21),
  },
  { id: "e3", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e6",
    title: "New Laptop",
    amount: 680.99,
    date: new Date(2022, 2, 10),
  },
  {
    id: "e7",
    title: "Holiday in Greece",
    amount: 1024.83,
    date: new Date(2022, 7, 23),
  },
  {
    id: "e8",
    title: "Versace Parfume",
    amount: 129.99,
    date: new Date(2022, 8, 15),
  },
  {
    id: "e9",
    title: "Kitchen supplies",
    amount: 226.18,
    date: new Date(2022, 10, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
