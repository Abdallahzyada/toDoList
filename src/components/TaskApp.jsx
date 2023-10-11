import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const task = { text: newTask, done: false };
    setTasks([...tasks, task]);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleDone={toggleDone} onDeleteTask={deleteTask} />

    </div>
  );
};

export default TaskApp;
