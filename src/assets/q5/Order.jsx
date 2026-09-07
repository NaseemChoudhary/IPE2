function Order({ order, onUpdate, onDelete }) {
    return <article className="border p-3 mb-3">
        <h2>{order.food}</h2><p>Customer: {order.customer} | Table: {order.table}</p><p>Quantity: {order.quantity}</p><p>Status: {order.status}</p>
        <button className="btn btn-secondary btn-sm me-2" onClick={() => onUpdate(order.id)}>Update status</button><button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(order.id)}>Delete</button>
    </article>;
}
export default Order;