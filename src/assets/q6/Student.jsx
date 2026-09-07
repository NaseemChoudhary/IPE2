function Student({ student, onToggle, onDelete }) {
    return <article className="border p-3 mb-3"><h2>{student.name}</h2><p>Roll: {student.roll} | Class: {student.className}</p><p>Status: {student.present ? "Present" : "Absent"}</p><button className="btn btn-secondary btn-sm me-2" onClick={() => onToggle(student.id)}>Mark {student.present ? "Absent" : "Present"}</button><button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>Remove</button></article>;
}
export default Student;