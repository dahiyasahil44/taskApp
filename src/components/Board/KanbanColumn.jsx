// src/components/Board/KanbanColumn.jsx
import React from "react";
import TaskCard from "./TaskCard";

const KanbanColumn = ({ status, tasks }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow min-h-[300px]">
      <h2 className="text-lg font-semibold mb-4">{status}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && <p className="text-gray-500">No tasks</p>}
      </div>
    </div>
  );
};

export default KanbanColumn;
