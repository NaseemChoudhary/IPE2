function Assignment({ assignment, onToggle, onDelete }) {
    return (
        <article className="border p-3 mb-3">
            <p>Subject: {assignment.subject}</p>
            <h2>{assignment.title}</h2>
            <p>Due date: {assignment.dueDate || "No date selected"}</p>
            <button className="btn btn-secondary btn-sm me-2" onClick={() => onToggle(assignment.id)}>
                {assignment.status ? "Completed" : "Pending"}
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(assignment.id)}>
                Delete
            </button>
        </article>
    );
}

export default Assignment;