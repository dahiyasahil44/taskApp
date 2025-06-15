import React, { useEffect, useState } from "react";

const DeadlineNotifier = ({ tasks }) => {
  const [dueSoon, setDueSoon] = useState([]);

  useEffect(() => {
    const now = new Date();
    const soon = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const diff = dueDate - now;
      return diff > 0 && diff <= 48 * 60 * 60 * 1000; // 48 hours
    });
    setDueSoon(soon);
  }, [tasks]);

  if (!dueSoon.length) return null;

  return (
    <div className="bg-red-100 border border-red-300 text-red-800 p-3 rounded mb-4">
      <strong>Urgent:</strong>
      <ul className="list-disc pl-5">
        {dueSoon.map((task) => (
          <li key={task.id}>
            <span className="font-semibold">{task.title}</span> is due by {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeadlineNotifier;
