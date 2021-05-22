import { useState } from "react";
import "./Expenses.css";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  
  const [year, setYear] = useState("2021");
  // props.onYearData(year);

  const yearFilterDataHandler = (yearData) => {
    // console.log(yearData);
    setYear(yearData);
  };

  const filterdExpenses = props.data.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onYearFilterData={yearFilterDataHandler}
      />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList data={filterdExpenses} />
    </Card>
  );
}

export default Expenses;
