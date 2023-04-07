import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputTitile, setTitleText] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitleText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2030-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
