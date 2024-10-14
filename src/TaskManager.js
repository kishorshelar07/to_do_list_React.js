import React, { useState } from 'react';
import uniqid from 'uniqid';

// TaskManager component handles task logic (adding and deleting tasks) without rendering components.
function TaskManager() {


  // Initialize `tasks` state as an empty array using `useState`.
  // `tasks` will store task objects, and `setTasks` is used to update the tasks state.
  const [tasks, setTasks] = useState([]);

  // Define a function `addTask` to handle adding a new task.
  // It accepts `taskText` (the task content) as an argument.
  const addTask = (taskText) => {
    // Create a new task object with three properties:
    const newTask = {
      text: taskText,            // `text`: the task content passed from the input.
      order: tasks.length + 1,   // `order`: incrementing the task order based on the length of the `tasks` array.
      id: uniqid(),              // `id`: generate a unique identifier for the task using `uniqid()`.
    };

    // Update the `tasks` state by appending the new task to the existing array of tasks.
    // `prevTasks` refers to the previous state (the existing tasks).
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Define a function `deleteHandler` to handle task deletion.
  // It accepts the `id` of the task to be deleted.
  const deleteHandler = (id) => {
    // Filter out the task whose `id` matches the one provided, thus removing it from the tasks array.
    // After filtering, adjust the `order` of the remaining tasks using `map` by assigning new incremental orders based on the index.
    let updatedTasks = tasks
      .filter((task) => task.id !== id)   // Remove the task with the matching `id`.
      .map((task, index) => ({ ...task, order: index + 1 })); // Reassign new order to remaining tasks.

    // Update the `tasks` state with the updated task list after deletion and reordering.
    setTasks(updatedTasks);
  };

  
  return { tasks, addTask, deleteHandler };
}

export default TaskManager; 
