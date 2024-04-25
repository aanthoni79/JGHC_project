import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    if (tasks.some(task => task.text === newTask)) return; // Prevent adding duplicate tasks

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-container">
        {tasks.map((task, index) => (
          <div key={index} className={`task ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{task.text}</span>
            <span className="delete-task" onClick={() => deleteTask(index)}>❌</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
