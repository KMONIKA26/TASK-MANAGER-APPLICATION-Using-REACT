import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span>
            {task.name} - {task.description}
          </span>
          <button className="delete" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
