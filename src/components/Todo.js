import React from "react";

const Todo = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => onDelete(task)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
