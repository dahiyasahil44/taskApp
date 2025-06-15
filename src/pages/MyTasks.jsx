// src/pages/MyTasks.jsx
import React from "react";

const MyTasks = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>
      <p className="text-gray-600">Tasks assigned to you will appear here.</p>
      {/* Future: Show tasks using <TaskList /> or <KanbanBoard /> */}
    </div>
  );
};

export default MyTasks;
