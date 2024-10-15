import React, { useState } from "react";

// TaskInput component for adding new tasks
function TaskInput({ addTask, order }) {
          
    // Define the `TaskInput` functional component, which receives two props:
    // 1. `addTask`: A function passed down to add a new task.
    // 2. `order`: The current task order number.


 // Initialize the `task` state using the `useState` hook. The state is an object with a `text` property, initially an empty string.
  // `setTask` is the function to update the `task` state.
  const [task, setTask] = useState({ text: "" }); 

  const handleInputChange = (e) => {
    // Define a function to handle input changes.
    // It takes the input event (`e`) as a parameter and updates the `task.text` state with the new input value.
  
    setTask({ ...task, text: e.target.value });
     // Spread the existing `task` object (`...task`) and update only the `text` property to the new value (`e.target.value`).
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Define a function to handle the form submission.
    // `e.preventDefault()` prevents the default form submission behavior (page reload).
  

    e.preventDefault(); // Prevent default form submission behavior
    if (task.text.trim() === "") return;   // Check if the task text is empty or consists only of spaces. If so, return early and do nothing.
    addTask(task.text);     // Call the `addTask` function (received as a prop) to add the task.
                            // It passes `task.text` as an argument to the parent component.
    setTask({ text: "" });  // After submission, reset the `task.text` field to an empty string to clear the input.


  };

  // Render the input form
  return (
    <form onSubmit={handleSubmit}>  {/* The form element handles task submission when the user presses the "Add Task" button. */}
      <input   type="text"  value={task.text}  onChange={handleInputChange}  placeholder="Create a new task" />  {/* The input field is controlled by `task.text`. Its value changes as the user types, triggering `handleInputChange`. */}
      <button type="submit">Add Task {order}</button>
    </form>
  );
}

// Export the TaskInput component for use in other files
export default TaskInput;
