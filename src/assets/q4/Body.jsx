import { useState, useEffect } from "react";
import Form from "./form";
import Appointment from "./Appointment";

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(0);
    const [appointments, setAppointments] = useState([]);

    function addAppointment(appointment) {
        setAppointments((current) => [...current, appointment]);
        setShowForm(false);
    }
    
    useEffect(() => {
        setCount(appointments.filter((appointment) => appointment.status === "Scheduled").length);
    }, [appointments]);

    function toggleStatus(id) {
        setAppointments((current) => current.map((appointment) => appointment.id === id ? { ...appointment, status: "Completed" } : appointment));
    }
    function deleteAssign(id) {
        setAppointments((current) => current.map((appointment) => appointment.id === id ? { ...appointment, status: "Cancelled" } : appointment));
    }
    return (
        <main className="container mt-4">
            <h1>Patient Appointment Manager</h1>
            <p>Scheduled appointments: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Appointment</button>
            {showForm && (
                <Form onSubmit={addAppointment} onCancel={() => setShowForm(false)} />
            )}
            <section aria-label="Assignments">
            {!appointments.length && <p>No Appointments Available</p>}
            {appointments.map((appointment) => (
                <Appointment key={appointment.id} appointment={appointment} onComplete={toggleStatus} onCancel={deleteAssign} />
            ))}
            </section>
        </main>
    );
}

export default Body;