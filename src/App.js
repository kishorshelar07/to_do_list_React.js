import React from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import Overview from "./Overview";
import TaskManager from "./TaskManager";

function App() {
  const { tasks, addTask, deleteHandler } = TaskManager();
  //  returned from `TaskManager` to get `tasks`, `addTask`, and `deleteHandler`.

  return (
    <div className="App">
      <h1>To-Do List</h1><br/>

      <TaskInput addTask={addTask} />
      {/* Render `TaskInput` component and pass `addTask` for adding new tasks. */}

      <Overview tasks={tasks} handleDelete={deleteHandler} />
      {/* Render `Overview` to display the tasks and allow task deletion via `deleteHandler`. */}
    </div>
  );
}

export default App;
