import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses Not Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
