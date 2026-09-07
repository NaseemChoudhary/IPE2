import { useState, useEffect } from "react";
import Form from "./form";
import Workout from "./Workout";

function Body() {
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  function addWorkout(workout) {
    setWorkouts((current) => [...current, workout]);
    setShowForm(false);
  }

  useEffect(() => {
    setCount(workouts.reduce((total, workout) => total + workout.duration, 0));
  }, [workouts]);

  function toggleStatus(id) {
    setWorkouts((current) =>
      current.map((workout) =>
        workout.id === id
          ? { ...workout, completed: !workout.completed }
          : workout,
      ),
    );
  }
  function deleteWorkout(id) {
    setWorkouts((current) => current.filter((workout) => workout.id !== id));
  }
  return (
    <main className="container mt-4">
      <h1>Fitness Workout Tracker</h1>
      <p>Total workout duration: {count} minutes</p>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        Add Workout
      </button>
      {showForm && (
        <Form onSubmit={addWorkout} onCancel={() => setShowForm(false)} />
      )}
      <section aria-label="Assignments">
        {!workouts.length && <p>No Workouts Available</p>}
        {workouts.map((workout) => (
          <Workout
            key={workout.id}
            workout={workout}
            onToggle={toggleStatus}
            onDelete={deleteWorkout}
          />
        ))}
      </section>
    </main>
  );
}

export default Body;
