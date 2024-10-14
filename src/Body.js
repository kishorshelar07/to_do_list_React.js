import './App.css';
import Overview from './components/Overview';
import { useState } from 'react';
import uniqid from 'uniqid';

function Body() {
  const [task, setTask] = useState({
    text: '',
    order: 1,
    id: uniqid(),
  });

  const [tasks, setTasks] = useState([]);

  const inputChangeHandler = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      text: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.text.trim() === '') return; // prevent empty task submission

    setTasks((prevTasks) => [...prevTasks, task]);

    // Reset task input after submission
    setTask({
      text: '',
      order: task.order + 1,
      id: uniqid(),
    });
  };

  const deleteHandler = (id) => {
    let deletedAt;
    let updatedTasks = tasks
      .filter((item, index) => {
        if (item.id === id) {
          deletedAt = index;
          return false;
        }
        return true;
      })
      .map((item, index) => {
        if (index >= deletedAt) return { ...item, order: item.order - 1 };
        return item;
      });

    setTasks([...updatedTasks]);

    setTask({
      text: '',
      order: task.order - 1,
      id: uniqid(),
    });
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="taskInput"
          value={task.text}
          onChange={inputChangeHandler}
          placeholder="Create a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <Overview tasks={tasks} handleDelete={deleteHandler} />
    </div>
  );
}

export default Body;
