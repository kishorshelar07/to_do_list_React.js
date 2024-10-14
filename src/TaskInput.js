
import React, { useState } from 'react';

function TaskInput({ addTask, order }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return; // prevent empty task submission
    addTask(inputValue);
    setInputValue(''); // clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Create a new task"
      />
      <button type="submit">Add Task {order}</button>
    </form>
  );
}

export default TaskInput;
