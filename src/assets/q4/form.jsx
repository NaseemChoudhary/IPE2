import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [patient, setPatient] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const appointment = {
            id: Date.now(),
            patient: patient.trim(), doctor: doctor.trim(), date, time, status: "Scheduled"
        };

        onSubmit(appointment);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add appointment</h3>

            <div className="mb-3">
                <label htmlFor="patient" className="form-label">Patient name:</label>
                <input
                    className="form-control"
                    id="patient" value={patient} onChange={(e) => setPatient(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="doctor" className="form-label">Doctor name:</label>
                <input
                    className="form-control"
                    id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date:</label>
                <input
                    className="form-control"
                    id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="mb-3"><label htmlFor="time" className="form-label">Time:</label><input className="form-control" id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required /></div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Appointment
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;