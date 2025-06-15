// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-4">Page not found.</p>
      <Link
        to="/dashboard"
        className="text-blue-600 hover:underline font-medium"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
