import { useState, useEffect } from "react";
import Form from "./form";
import Application from "./Application";

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(0);
    const [applications, setApplications] = useState([]);

    function addApplication(application) {
        setApplications((current) => [...current, application]);
        setShowForm(false);
    }
    
    useEffect(() => {
        setCount(applications.length);
    }, [applications]);

    function updateStatus(id, status) {
        setApplications((current) => current.map((application) => application.id === id ? { ...application, status } : application));
    }
    function deleteApplication(id) {
        setApplications((current) => current.filter((application) => application.id !== id));
    }
    return (
        <main className="container mt-4">
            <h1>Job Application Tracker</h1>
            <p>Total applications: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Application</button>
            {showForm && (
                <Form onSubmit={addApplication} onCancel={() => setShowForm(false)} />
            )}
            <section aria-label="Assignments">
            {!applications.length && <p>No Applications Available</p>}
            {applications.map((application) => (
                <Application key={application.id} application={application} onUpdate={updateStatus} onDelete={deleteApplication} />
            ))}
            </section>
        </main>
    );
}

export default Body;