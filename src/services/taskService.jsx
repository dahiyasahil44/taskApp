export const fetchTasks = async () => {
  return JSON.parse(localStorage.getItem("taskList")) || [];
};

export const saveTask = async (task) => {
  const tasks = await fetchTasks();
  const newTask = { ...task, id: Date.now() };
  const updatedTasks = [...tasks, newTask];
  localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  return newTask;
};

export const updateTaskById = async (updatedTask) => {
  const tasks = await fetchTasks();
  const updatedTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
  localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  return updatedTask;
};

export const deleteTaskById = async (taskId) => {
  const tasks = await fetchTasks();
  const updatedTasks = tasks.filter((t) => t.id !== taskId);
  localStorage.setItem("taskList", JSON.stringify(updatedTasks));
};
