import { useState, useEffect } from "react";
import Form from "./form";
import Expense from "./Expense";

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(0);
    const [expenses, setExpenses] = useState([]);

    function addExpense(expense) {
        setExpenses((currentExpenses) => [...currentExpenses, expense]);
        setShowForm(false);
    }
    
    useEffect(() => {
        setCount(expenses.reduce((total, expense) => total + expense.amount, 0));
    }, [expenses]);

    function deleteExpense(id) {
        setExpenses((currentExpenses) => currentExpenses.filter((expense) => expense.id !== id));
    }
    return (
        <main className="container mt-4">
            <h1>Personal Expense Tracker</h1>
            <p>Total expense: {count.toFixed(2)}</p>
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Expense</button>
            {showForm && (
                <Form onSubmit={addExpense} onCancel={() => setShowForm(false)} />
            )}
            <section aria-label="Assignments">
            {!expenses.length && <p>No Expenses Recorded</p>}
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} onDelete={deleteExpense} />
            ))}
            </section>
        </main>
    );
}

export default Body;