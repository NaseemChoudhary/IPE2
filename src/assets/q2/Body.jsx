import { useState, useEffect } from "react";
import Form from "./form";
import Book from "./Book";

function Body() {
    const [addBooks, setAddBooks] = useState(false);
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState([]);

    function addBook(book) {
        setBooks((currentBooks) => [...currentBooks, book]);
        setAddBooks(false);
    }
    
    useEffect(() => {
        setCount(books.filter((book) => book.status).length);
    }, [books]);

    function toggleStatus(id) {
        setBooks(prev =>
            prev.map(a =>
                a.id === id ? { ...a, status: !a.status } : a
    )
    );
    }
    function deleteBooks(id) {
        setBooks(prev => 
            prev.filter(a => a.id !== id)
        )
    }
    return (
        <main className="container mt-4">
            <h1>Library Book Manager</h1>
            <p>Total Books Available: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setAddBooks(true)}>Add Book</button>
            {addBooks && (
                <Form onSubmit={addBook} onCancel={() => setAddBooks(false)} />
            )}
            <section aria-label="Books">
            {!books.length && <p>No Books Available</p>}
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    onToggle={toggleStatus}
                    onDelete={deleteBooks}
                />
            ))}
            </section>
        </main>
    );
}

export default Body;