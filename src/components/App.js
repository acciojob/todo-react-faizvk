import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
      {tasks.length > 0 && <Todo tasks={tasks} onDelete={handleDelete} />}
    </div>
  );
};

export default App;
