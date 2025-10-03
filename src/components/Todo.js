import React from "react";

const Todo = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => onDelete(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
