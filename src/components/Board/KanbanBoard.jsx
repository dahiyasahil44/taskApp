// src/components/Board/KanbanBoard.jsx
import React from "react";
import KanbanColumn from "./KanbanColumn";
import useTasks from "../../hooks/useTasks";

const statuses = ["To-Do", "In Progress", "Completed"];

const KanbanBoard = () => {
  const { tasks } = useTasks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {statuses.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
