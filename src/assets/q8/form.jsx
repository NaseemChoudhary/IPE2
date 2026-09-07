import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [name, setName] = useState(""); const [roll, setRoll] = useState(""); const [department, setDepartment] = useState(""); const [event, setEvent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const registration = { id: Date.now(), name: name.trim(), roll, department, event, present: false };

        onSubmit(registration);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Register student</h3>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Student name:</label>
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
                <label htmlFor="department" className="form-label">Department:</label>
                <input
                    className="form-control"
                    id="department" value={department} onChange={(e) => setDepartment(e.target.value)}
                />
            </div>
            <div className="mb-3"><label htmlFor="event" className="form-label">Event name:</label><input className="form-control" id="event" value={event} onChange={(e) => setEvent(e.target.value)} required /></div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Register Student
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;