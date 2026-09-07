function Expense({ expense, onDelete }) {
    return <article className="border p-3 mb-3">
        <h2>{expense.name}</h2>
        <p>Amount: {expense.amount.toFixed(2)}</p>
        <p>Category: {expense.category}</p>
        <p>Date: {expense.date}</p>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(expense.id)}>Delete</button>
    </article>;
}

export default Expense;