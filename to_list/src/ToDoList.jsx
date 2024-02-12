import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(id) {
    setTasks((t) => t.filter((_, index) => id !== index));
  }

  function moveUpTask(id) {
    if (id > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[id], updatedTasks[id - 1]] = [
        updatedTasks[id - 1],
        updatedTasks[id],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDownTask(id) {
    if (id < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[id], updatedTasks[id + 1]] = [
        updatedTasks[id + 1],
        updatedTasks[id],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <h2>ToDo</h2>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, id) => {
          return (
            <li key={id}>
              {task}
              <button onClick={() => deleteTask(id)}>Delete</button>
              <button onClick={() => moveUpTask(id)}>Up</button>
              <button onClick={() => moveDownTask(id)}>Down</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
