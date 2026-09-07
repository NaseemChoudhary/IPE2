function Appointment({ appointment, onComplete, onCancel }) {
    return <article className="border p-3 mb-3">
        <h2>{appointment.patient}</h2>
        <p>Doctor: {appointment.doctor}</p><p>Date: {appointment.date} at {appointment.time}</p>
        <p>Status: {appointment.status}</p>
        {appointment.status === "Scheduled" && <><button className="btn btn-secondary btn-sm me-2" onClick={() => onComplete(appointment.id)}>Complete</button><button className="btn btn-outline-danger btn-sm" onClick={() => onCancel(appointment.id)}>Cancel</button></>}
    </article>;
}
export default Appointment;