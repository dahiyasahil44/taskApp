import React from "react";

const ReminderBanner = ({ upcomingTasks }) => {
  if (!upcomingTasks.length) return null;

  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 rounded mb-4">
      <strong>Upcoming Deadlines:</strong>
      <ul className="list-disc pl-5">
        {upcomingTasks.map((task) => (
          <li key={task.id}>
            <span className="font-semibold">{task.title}</span> due by {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderBanner;