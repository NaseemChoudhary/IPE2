import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const book = {
            id: Date.now(),
            title: title.trim(),
            author: author.trim(),
            category: category,
            status: true
        };

        onSubmit(book);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add new book</h3>

            <div className="mb-3">
                <label htmlFor="title" className="form-label" >Book Title: </label>
                <input
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author: </label>
                <input
                    className="form-control"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category: </label>
                <input
                    className="form-control"
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add book
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;