import React from "react";

function TaskCard({ task }) {
  return (
    <div className="card">
      <h2>{task.name}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
