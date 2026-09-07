function Book({ book, onToggle, onDelete }) {
    return (
        <article className="border p-3 mb-3">
            <p>Author: {book.author}</p>
            <h2>{book.title}</h2>
            <p>Category: {book.category}</p>
            <button className="btn btn-secondary btn-sm me-2" onClick={() => onToggle(book.id)}>
                {book.status ? "Available" : "Issued"}
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(book.id)}>
                Delete
            </button>
        </article>
    );
}

export default Book;