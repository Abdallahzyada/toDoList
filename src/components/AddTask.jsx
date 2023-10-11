import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask); 
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;


