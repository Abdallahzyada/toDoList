import React from 'react';

const TaskList = ({ tasks, onToggleDone, onDeleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item ${task.done ? 'done' : ''}`}
          >
            <div className="d-flex justify-content-between align-items-center">
            <div
              style={{
                borderLeft: task.done ? '3px solid #28a745' : 'none', 
                paddingLeft: '10px', 
                textDecoration: task.done ? 'line-through' : 'none', 
              }}
            >
              {task.text}
            </div>
              <div>
                <button
                  className={`btn btn-success btn-sm`}
                  onClick={() => onToggleDone(index)}
                >
                  {task.done ? 'Undo' : 'Mark as Done'}
                </button>
                <span className="ml-2"></span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;





