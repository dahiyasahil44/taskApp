export const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-200 text-red-800";
    case "medium":
      return "bg-yellow-200 text-yellow-800";
    case "low":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export const priorityLevels = ["High", "Medium", "Low"];
