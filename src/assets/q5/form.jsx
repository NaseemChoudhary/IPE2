import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [customer, setCustomer] = useState(""); const [table, setTable] = useState("");
    const [food, setFood] = useState(""); const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        const order = { id: Date.now(), customer: customer.trim(), table, food: food.trim(), quantity: Number(quantity), status: "Pending" };

        onSubmit(order);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add order</h3>

            <div className="mb-3">
                <label htmlFor="customer" className="form-label">Customer name:</label>
                <input
                    className="form-control"
                    id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="table" className="form-label">Table number:</label>
                <input
                    className="form-control"
                    id="table" value={table} onChange={(e) => setTable(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="food" className="form-label">Food item:</label>
                <input
                    className="form-control"
                    id="food" value={food} onChange={(e) => setFood(e.target.value)}
                />
            </div>
            <div className="mb-3"><label htmlFor="quantity" className="form-label">Quantity:</label><input className="form-control" id="quantity" type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /></div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Order
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;