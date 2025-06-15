// src/pages/TaskDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams();

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Task Details</h1>
      <p className="text-gray-600">Viewing details for task ID:</p>
      <div className="text-lg font-mono mt-2 p-2 bg-gray-100 rounded">{taskId}</div>
      {/* Future: Fetch task details from DB using taskId */}
    </div>
  );
};

export default TaskDetails;
