import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './redux/taskSlice';
import TaskForm from './components/TaskForm';
import './App.css';

const TaskList = lazy(() => import('./components/TaskList')); // Code splitting

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(task => dispatch(addTask(task)));
    return () => {
      localStorage.removeItem('tasks');
    };
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          {/* <li><a href="#">About</a></li>
          <li><a href="#">Tasks</a></li> */}
        </ul>
      </nav>

      {/* Main Container */}
      <div className="container">
        <h1>Task Manager</h1>
        <TaskForm onAddTask={handleAddTask} />
        <Suspense fallback={<div>Loading...</div>}>
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
