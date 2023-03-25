import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const getFilterYearHandler = (selectedYear) => {
    console.log("From Expenses.js");
    console.log(selectedYear);

    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          getFilterYear={getFilterYearHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}        
      </Card>
    </div>
  );
};

export default Expenses;
