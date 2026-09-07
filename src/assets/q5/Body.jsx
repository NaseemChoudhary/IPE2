import { useState, useEffect } from "react";
import Form from "./form";
import Order from "./Order";

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(0);
    const [orders, setOrders] = useState([]);

    function addOrder(order) {
        setOrders((current) => [...current, order]);
        setShowForm(false);
    }
    
    useEffect(() => {
        setCount(orders.filter((order) => order.status !== "Served").length);
    }, [orders]);

    function toggleStatus(id) {
        setOrders((current) => current.map((order) => order.id === id ? { ...order, status: order.status === "Pending" ? "Preparing" : "Served" } : order));
    }
    function deleteAssign(id) {
        setOrders((current) => current.filter((order) => order.id !== id));
    }
    return (
        <main className="container mt-4">
            <h1>Restaurant Order Manager</h1>
            <p>Active orders: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Order</button>
            {showForm && (
                <Form onSubmit={addOrder} onCancel={() => setShowForm(false)} />
            )}
            <section aria-label="Assignments">
            {!orders.filter((order) => order.status !== "Served").length && <p>No Active Orders</p>}
            {orders.filter((order) => order.status !== "Served").map((order) => (
                <Order key={order.id} order={order} onUpdate={toggleStatus} onDelete={deleteAssign} />
            ))}
            </section>
        </main>
    );
}

export default Body;