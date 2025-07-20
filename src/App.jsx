import { useState } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import expenseData from "./component/expenseData";
import { useLocalStorage } from "./hooks/useLocalstorage";

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData);
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', '')

  

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          setExpense={setExpense}
          expenses={expenses}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
