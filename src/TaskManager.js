import React, { useState } from 'react';
import TaskInput from './TaskInput';
import Overview from './Overview';
import uniqid from 'uniqid';

function TaskManager() {
  const [task, setTask] = useState({
    text: '',
    order: 1,
    id: uniqid(),
  });

  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      text: taskText,
      order: task.order,
      id: uniqid(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

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
    <>
      <TaskInput addTask={addTask} order={task.order} />
      <Overview tasks={tasks} handleDelete={deleteHandler} />
    </>
  );
}

export default TaskManager;
