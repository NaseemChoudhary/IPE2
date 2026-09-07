import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const assignment = {
            id: Date.now(),
            title: title.trim(),
            subject: subject.trim(),
            dueDate: dueDate,
            status: false
        };

        onSubmit(assignment);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add new assignment</h3>

            <div className="mb-3">
                <label htmlFor="title" className="form-label" >Assignment Title: </label>
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
                <label htmlFor="subject" className="form-label">Subject: </label>
                <input
                    className="form-control"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date: </label>
                <input
                    className="form-control"
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Assignment
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;