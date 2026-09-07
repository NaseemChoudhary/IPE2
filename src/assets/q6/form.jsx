import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [name, setName] = useState(""); const [roll, setRoll] = useState(""); const [className, setClassName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const student = { id: Date.now(), name: name.trim(), roll, className, present: false };

        onSubmit(student);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add student</h3>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    className="form-control"
                    id="name" value={name} onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="roll" className="form-label">Roll number:</label>
                <input
                    className="form-control"
                    id="roll" value={roll} onChange={(e) => setRoll(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="class" className="form-label">Class:</label>
                <input
                    className="form-control"
                    id="class" value={className} onChange={(e) => setClassName(e.target.value)}
                />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Student
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;