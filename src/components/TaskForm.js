import React, { useState, useRef } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const taskDescriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescriptionRef.current.value
    };
    onAddTask(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a new task"
      />
      <input
        type="text"
        ref={taskDescriptionRef}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
