import React, { useState } from "react";

import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [expenseTitle, setTitle] = useState(props.title);

  const expenseAmount = props.amount;

  const clickUpdateTitle = () => {
    if (expenseTitle === props.title) {
      setTitle("Test");
    } else {
      setTitle(props.title);
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
      </div>
      <button onClick={clickUpdateTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
