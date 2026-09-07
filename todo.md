# FEWD Lab IPE-2: Problem Definitions

This file contains the original problem definitions and implementation checklists for the lab. Choose the problem assigned to you, then complete its checklist before submitting.

## Common React Requirements

Every application should:

- [ ] Use functional components and JSX.
- [ ] Use props to pass data to reusable components.
- [ ] Use `useState` for the main collection and form inputs.
- [ ] Handle input changes, form submission, and button clicks.
- [ ] Render collection items with `.map()` and unique `key` values.
- [ ] Use Bootstrap for styling and interface components.
- [ ] Use `useEffect` to display or calculate the required summary value.

---

## 1. Student Assignment Manager

Develop a React application to manage student assignments. Users should be able to add, display, complete, and delete assignments.

### Assignment data

Each assignment should contain:

- Subject
- Assignment title
- Due date
- Status

### Required behavior

- [ ] Add assignments.
- [ ] Display assignments.
- [ ] Complete assignments.
- [ ] Delete assignments.
- [ ] Display `No Assignments Available` when there are no assignments.
- [ ] Show `Completed` or `Pending` conditionally.
- [ ] Use `useEffect` to display the total number of assignments.

---

## 2. Library Book Manager

Develop a React application for managing books in a library. Users should be able to add, display, issue/return, and delete books.

### Book data

Each book should contain:

- Book title
- Author
- Category
- Availability status

### Required behavior

- [ ] Use reusable functional components.
- [ ] Pass book details using props.
- [ ] Use `useState` to manage books and form data.
- [ ] Handle form and button events.
- [ ] Display `No Books Available` when the list is empty.
- [ ] Show `Available` or `Issued` conditionally.
- [ ] Render books dynamically using `.map()` and unique keys.
- [ ] Use Bootstrap components for the interface.
- [ ] Use `useEffect` to display the number of available books.

---

## 3. Personal Expense Tracker

Develop a React application that allows users to record and manage their daily expenses.

### Expense data

Each expense should contain:

- Expense name
- Amount
- Category
- Date

### Required behavior

- [ ] Add expenses.
- [ ] Display all expenses.
- [ ] Delete expenses.
- [ ] Display the total expense amount.
- [ ] Use functional components and props.
- [ ] Use `useState` for expenses and form fields.
- [ ] Handle form submission and button clicks.
- [ ] Display `No Expenses Recorded` when there are no expenses.
- [ ] Render expenses dynamically using `.map()` and unique keys.
- [ ] Use Bootstrap for the UI.
- [ ] Use `useEffect` to calculate the total expense.

---

## 4. Patient Appointment Manager

Develop a React application for managing appointments in a small clinic.

### Appointment data

Each appointment should contain:

- Patient name
- Doctor name
- Date
- Time
- Appointment status

### Required behavior

- [ ] Add appointments.
- [ ] Display appointments.
- [ ] Mark appointments as completed.
- [ ] Cancel or delete appointments.
- [ ] Use components and props for organizing the application.
- [ ] Use `useState` for appointments and form data.
- [ ] Handle form and button events.
- [ ] Display `No Appointments Available` when appropriate.
- [ ] Show `Scheduled`, `Completed`, or `Cancelled` conditionally.
- [ ] Render appointments using `.map()` and unique keys.
- [ ] Use Bootstrap for styling.
- [ ] Use `useEffect` to display the number of scheduled appointments.

---

## 5. Restaurant Order Manager

Develop a React application for managing food orders in a restaurant. Staff should be able to add new orders, display active orders, update order status, and delete orders.

### Order data

Each order should contain:

- Customer name
- Table number
- Food item
- Quantity
- Order status

### Required behavior

- [ ] Add new orders.
- [ ] Display active orders.
- [ ] Update order status.
- [ ] Delete an order.
- [ ] Use functional components and props.
- [ ] Use `useState` for order and form data.
- [ ] Handle input changes and button clicks.
- [ ] Display `No Active Orders` when there are no orders.
- [ ] Show `Pending`, `Preparing`, or `Served` conditionally.
- [ ] Render orders using `.map()` with unique keys.
- [ ] Use Bootstrap cards, buttons, and badges.
- [ ] Use `useEffect` to display the total number of active orders.

---

## 6. Student Attendance Manager

Develop a React application to manage student attendance.

### Student data

Each student should contain:

- Name
- Roll number
- Class
- Attendance status

### Required behavior

- [ ] Add students.
- [ ] Display the student list.
- [ ] Mark students as `Present` or `Absent`.
- [ ] Remove students from the list.
- [ ] Use functional components and props.
- [ ] Use `useState` for student and attendance data.
- [ ] Handle button and form events.
- [ ] Display `No Students Available` when the list is empty.
- [ ] Show `Present` or `Absent` conditionally.
- [ ] Render students using `.map()` and unique keys.
- [ ] Use Bootstrap for styling.
- [ ] Use `useEffect` to display the number of present and absent students.

---

## 7. Job Application Tracker

Develop a React application that helps students maintain their job or internship applications.

### Application data

Each application should contain:

- Company name
- Job role
- Application date
- Status

### Required behavior

- [ ] Add a job application.
- [ ] Display all applications.
- [ ] Update application status.
- [ ] Delete applications.
- [ ] Use components and props.
- [ ] Use `useState` for application and form data.
- [ ] Handle form submission and button events.
- [ ] Display `No Applications Available` when appropriate.
- [ ] Show `Applied`, `Interview`, `Selected`, or `Rejected` conditionally.
- [ ] Render applications using `.map()` and unique keys.
- [ ] Use Bootstrap for the interface.
- [ ] Use `useEffect` to display the total number of applications.

---

## 8. Event Registration Manager

Develop a React application for managing registrations for a college event.

### Registration data

Each registration should contain:

- Student name
- Roll number
- Department
- Event name

### Required behavior

- [ ] Register a student.
- [ ] Display registered students.
- [ ] Mark attendance as `Present` or `Absent`.
- [ ] Delete a registration.
- [ ] Use functional components and props.
- [ ] Use `useState` for registration data.
- [ ] Handle form inputs and button events.
- [ ] Display `No Registrations Available` when appropriate.
- [ ] Show attendance status conditionally.
- [ ] Render registrations using `.map()` and unique keys.
- [ ] Use Bootstrap for styling.
- [ ] Use `useEffect` to display the total number of registered students.

---

## 9. Fitness Workout Tracker

Develop a React application to maintain a user's daily workout activities.

### Workout data

Each workout should contain:

- Exercise name
- Duration
- Exercise type
- Completion status

### Required behavior

- [ ] Add workouts.
- [ ] Display all workouts.
- [ ] Mark workouts as completed.
- [ ] Delete workouts.
- [ ] Display the total workout duration.
- [ ] Use functional components and props.
- [ ] Use `useState` for workouts and form fields.
- [ ] Handle input and button events.
- [ ] Display `No Workouts Available` when the list is empty.
- [ ] Show `Completed` or `Pending` conditionally.
- [ ] Render workouts using `.map()` and unique keys.
- [ ] Use Bootstrap for styling.
- [ ] Use `useEffect` to calculate the total workout duration.

---

## Recommended Build Order

Use this order for whichever problem you choose:

1. Define the TypeScript type for one item.
2. Create state for the item list and form fields.
3. Build the form and connect every input with `value` and `onChange`.
4. Handle form submission and add a new item with a unique ID.
5. Create a reusable item component that receives data through props.
6. Render the list with `.map()` and a unique `key`.
7. Add the required update and delete button handlers.
8. Add the empty-state message and conditional status display.
9. Add the required `useEffect` summary.
10. Finish the Bootstrap layout and test every checklist item.

## Final Verification

- [ ] The form adds a valid item.
- [ ] Every input updates state correctly.
- [ ] The list displays all items.
- [ ] Status changes work correctly.
- [ ] Delete/remove works correctly.
- [ ] The empty-state message appears after the last item is removed.
- [ ] The summary count or total updates after add, update, and delete actions.
- [ ] The UI uses Bootstrap classes.
- [ ] The app has no console errors.