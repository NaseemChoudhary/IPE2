import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const expense = {
            id: Date.now(),
            name: name.trim(),
            amount: Number(amount),
            category: category.trim(),
            date
        };

        onSubmit(expense);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add expense</h3>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Expense name:</label>
                <input
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount:</label>
                <input
                    className="form-control"
                    id="amount"
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category:</label>
                <input
                    className="form-control"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date:</label>
                <input className="form-control" id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Expense
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;