import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const addExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelExpenseHandler = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <button type="button" onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
