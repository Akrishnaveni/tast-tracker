import React, { useState } from "react";
import "./index.css";

const TaskList = ({ tasks, editTask, deleteTask }) => {
  const [editId, setEditId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleEdit = (task) => {
    setEditId(task.id);
    setUpdatedTask(task);
  };

  const handleUpdate = () => {
    editTask(editId, updatedTask);
    setEditId(null);
  };

  return (
    <div className="task-list">
      <h2 className="list-title">Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          {editId === task.id ? (
            <div>
              <input
                type="text"
                value={updatedTask.title}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, title: e.target.value })
                }
                className="task-input"
              />
              <textarea
                value={updatedTask.description}
                onChange={(e) =>
                  setUpdatedTask({
                    ...updatedTask,
                    description: e.target.value,
                  })
                }
                className="task-textarea"
              ></textarea>
              <button onClick={handleUpdate} className="task-save-btn">
                Save
              </button>
            </div>
          ) : (
            <div>
              <h3 className="task-title">{task.title}</h3>
              <p className="task-desc">{task.description}</p>
            </div>
          )}
          <button onClick={() => handleEdit(task)} className="task-edit-btn">
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="task-delete-btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
