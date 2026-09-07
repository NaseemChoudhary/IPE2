import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [company, setCompany] = useState(""); const [role, setRole] = useState(""); const [date, setDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const application = { id: Date.now(), company: company.trim(), role: role.trim(), date, status: "Applied" };

        onSubmit(application);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add application</h3>

            <div className="mb-3">
                <label htmlFor="company" className="form-label">Company name:</label>
                <input
                    className="form-control"
                    id="company" value={company} onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="role" className="form-label">Job role:</label>
                <input
                    className="form-control"
                    id="role" value={role} onChange={(e) => setRole(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Application date:</label>
                <input
                    className="form-control"
                    id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Application
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;