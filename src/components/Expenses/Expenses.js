import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const getFilterYearHandler = (selectedYear) => {
    console.log("From Expenses.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          getFilterYear={getFilterYearHandler}
        />

        <ExpensesChart expenses={filteredExpensesByYear} />

        <ExpensesList items={filteredExpensesByYear} />

        {/* {filteredExpensesByYear.length === 0 && <p>No Expenses found!</p>}
        {filteredExpensesByYear.length > 0 &&
          filteredExpensesByYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredExpensesByYear.length === 0 ? (
          <p>No Expenses found!</p>
        ) : (
          filteredExpensesByYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
