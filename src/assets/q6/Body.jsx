import { useState, useEffect } from "react";
import Form from "./form";
import Student from "./Student";

function Body() {
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([]);

  function addStudent(student) {
    setStudents((current) => [...current, student]);
    setShowForm(false);
  }

  useEffect(() => {
    setCount(students.filter((student) => student.present).length);
  }, [students]);

  function toggleStatus(id) {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student,
      ),
    );
  }
  function deleteStudent(id) {
    setStudents((current) => current.filter((student) => student.id !== id));
  }
  return (
    <main className="container mt-4">
      <h1>Student Attendance Manager</h1>
      <p>
        Present: {count} | Absent: {students.length - count}
      </p>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        Add Student
      </button>
      {showForm && (
        <Form onSubmit={addStudent} onCancel={() => setShowForm(false)} />
      )}
      <section aria-label="Assignments">
        {!students.length && <p>No Students Available</p>}
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
            onToggle={toggleStatus}
            onDelete={deleteStudent}
          />
        ))}
      </section>
    </main>
  );
}

export default Body;
