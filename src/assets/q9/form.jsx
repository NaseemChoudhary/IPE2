import { useState } from "react";

function Form({ onSubmit, onCancel }) {
    const [exercise, setExercise] = useState(""); const [duration, setDuration] = useState(""); const [type, setType] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const workout = { id: Date.now(), exercise: exercise.trim(), duration: Number(duration), type: type.trim(), completed: false };

        onSubmit(workout);
    }

    return (
        <form className="border p-3 mb-4" onSubmit={handleSubmit}>
            <h3>Add workout</h3>

            <div className="mb-3">
                <label htmlFor="exercise" className="form-label">Exercise name:</label>
                <input
                    className="form-control"
                    id="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="duration" className="form-label">Duration (minutes):</label>
                <input
                    className="form-control"
                    id="duration" type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="type" className="form-label">Exercise type:</label>
                <input
                    className="form-control"
                    id="type" value={type} onChange={(e) => setType(e.target.value)}
                />
            </div>

            <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">
                Add Workout
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
                Cancel
            </button>
            </div>
        </form>
    );
}

export default Form;