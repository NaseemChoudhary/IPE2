function Registration({ registration, onToggle, onDelete }) {
  return (
    <article className="border p-3 mb-3">
      <h2>{registration.name}</h2>
      <p>
        Roll: {registration.roll} | Department: {registration.department}
      </p>
      <p>Event: {registration.event}</p>
      <p>Attendance: {registration.present ? "Present" : "Absent"}</p>
      <button
        className="btn btn-secondary btn-sm me-2"
        onClick={() => onToggle(registration.id)}
      >
        Mark {registration.present ? "Absent" : "Present"}
      </button>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDelete(registration.id)}
      >
        Delete
      </button>
    </article>
  );
}
export default Registration;
