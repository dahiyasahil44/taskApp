import React from "react";
import KanbanBoard from "../components/Board/KanbanBoard";

const AllTasks = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <KanbanBoard />
    </div>
  );
};

export default AllTasks;