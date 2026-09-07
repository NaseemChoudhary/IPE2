function Workout({ workout, onToggle, onDelete }) {
    return <article className="border p-3 mb-3"><h2>{workout.exercise}</h2><p>Duration: {workout.duration} minutes</p><p>Type: {workout.type}</p><p>Status: {workout.completed ? "Completed" : "Pending"}</p><button className="btn btn-secondary btn-sm me-2" onClick={() => onToggle(workout.id)}>Mark {workout.completed ? "Pending" : "Completed"}</button><button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(workout.id)}>Delete</button></article>;
}
export default Workout;