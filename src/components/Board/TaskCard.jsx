import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-md font-bold text-blue-600 mb-1">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Due: {task.dueDate}</span>
        <Link
          to={`/tasks/${task.id}`}
          className="text-blue-500 hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;