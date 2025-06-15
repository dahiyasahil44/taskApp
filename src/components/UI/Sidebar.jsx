import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white shadow-md p-4 h-full hidden md:block">
      <h2 className="text-xl font-bold mb-6 text-blue-600">TaskMaster</h2>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className={`hover:text-blue-600 ${isActive("/dashboard") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
        >
          Dashboard
        </Link>
        <Link
          to="/tasks"
          className={`hover:text-blue-600 ${isActive("/tasks") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
        >
          All Tasks
        </Link>
        <Link
          to="/create"
          className={`hover:text-blue-600 ${isActive("/create") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
        >
          Create Task
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;