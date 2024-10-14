import React from 'react';
import './Overview.css'; // Optional: Add styles for the task list

function Overview({ tasks, handleDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item" id={task.id}>
            <span>{task.order}. {task.text}</span>
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
