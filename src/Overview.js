import React from 'react';
import './Overview.css'; // Optional: Add styles for the task list

// Define the Overview component that takes 'tasks' and 'handleDelete' as props
function Overview({ tasks, handleDelete }) {
  return (
    <div className="task-list"> {/* A container for the list of tasks */}
      {tasks.length === 0 ? ( // Check if there are no tasks in the 'tasks' array
        <p>No tasks added yet.</p> // If no tasks, display this message
      ) : (                  // If there are tasks, map over them and display each task
        tasks.map((task) => ( // Iterate over each task in the 'tasks' array
          <div key={task.id} className="task-item" id={task.id}>  {/* Render a div for each task with a unique key */}
            <span>{task.order}. {task.text}</span>  {/* Display the task order and text */}
            <button onClick={() => handleDelete(task.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Overview;
