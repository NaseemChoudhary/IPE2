import { useState, useEffect } from "react";
import Form from "./form";
import Registration from "./Registration";

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(0);
    const [registrations, setRegistrations] = useState([]);

    function addRegistration(registration) {
        setRegistrations((current) => [...current, registration]);
        setShowForm(false);
    }
    
    useEffect(() => {
        setCount(registrations.length);
    }, [registrations]);

    function toggleStatus(id) {
        setRegistrations((current) => current.map((registration) => registration.id === id ? { ...registration, present: !registration.present } : registration));
    }
    function deleteRegistration(id) {
        setRegistrations((current) => current.filter((registration) => registration.id !== id));
    }
    return (
        <main className="container mt-4">
            <h1>Event Registration Manager</h1>
            <p>Total registered students: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Register Student</button>
            {showForm && (
                <Form onSubmit={addRegistration} onCancel={() => setShowForm(false)} />
            )}
            <section aria-label="Assignments">
            {!registrations.length && <p>No Registrations Available</p>}
            {registrations.map((registration) => (
                <Registration key={registration.id} registration={registration} onToggle={toggleStatus} onDelete={deleteRegistration} />
            ))}
            </section>
        </main>
    );
}

export default Body;