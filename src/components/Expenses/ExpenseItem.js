import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [titleText, titleSet] = useState(props.title);

  const editClickHandler = () => {
    titleSet("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{titleText}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
      <button onClick={editClickHandler}>Edit</button>
    </Card>
  );
};

export default ExpenseItem;
