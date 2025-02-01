import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskitem, setTaskItem] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    } else {
      alert("Please Enter Some Text");
    }
  };

  const EditTask = (taskToEdit) => {};

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const sortedTasks = [...tasks].sort();

  return (
    <div>
      <h2>TO-DO-LIST</h2>
      <div className="addTaskInput">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="addTask">
        <ul>
          {sortedTasks.map((taskItem, index) => (
            <li key={index}>
              {taskItem}
              <button onClick={() => deleteTask(taskItem)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
