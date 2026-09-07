import { useState, useEffect } from "react";
import Form from "./form";
import Assignment from "./Assignment";

function Body() {
    const [addAssign, setAddAssign] = useState(false);
    const [count, setCount] = useState(0);
    const [assignments, setAssignments] = useState([]);

    function addAssignment(assignment) {
        setAssignments((currentAssignments) => [...currentAssignments, assignment]);
        setAddAssign(false);
    }
    
    useEffect(() => {
        setCount(assignments.length);
    }, [assignments]);

    function toggleStatus(id) {
        setAssignments(prev =>
            prev.map(a =>
                a.id === id ? { ...a, status: !a.status } : a
    )
    );
    }
    function deleteAssign(id) {
        setAssignments(prev => 
            prev.filter(a => a.id !== id)
        )
    }
    return (
        <main className="container mt-4">
            <h1>Assignment Manager</h1>
            <p>Total assignments: {count}</p>
            <button className="btn btn-primary mb-3" onClick={() => setAddAssign(true)}>Add Assignment</button>
            {addAssign && (
                <Form onSubmit={addAssignment} onCancel={() => setAddAssign(false)} />
            )}
            <section aria-label="Assignments">
            {!assignments.length && <p>No Assignments Available</p>}
            {assignments.map((assignment) => (
                <Assignment
                    key={assignment.id}
                    assignment={assignment}
                    onToggle={toggleStatus}
                    onDelete={deleteAssign}
                />
            ))}
            </section>
        </main>
    );
}

export default Body;