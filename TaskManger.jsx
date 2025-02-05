/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  // Handle adding a new task
  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: new Date().getTime(),
      text: task,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Handle deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handle editing a task
  const editTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  // Save the edited task
  const saveEditedTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editTaskText } : task
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      
      <div className="task-input">
        {editTaskId ? (
          <>
            <input
              type="text"
              value={editTaskText}
              onChange={(e) => setEditTaskText(e.target.value)}
            />
            <button onClick={saveEditedTask}>Save</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>
          </>
        )}
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span>{task.text}</span>
              <button onClick={() => editTask(task.id, task.text)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;
