export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const isPastDue = (dateStr) => {
  const now = new Date();
  const due = new Date(dateStr);
  return due < now;
};

export const isDueSoon = (dateStr, hours = 48) => {
  const now = new Date();
  const due = new Date(dateStr);
  const diff = due - now;
  return diff > 0 && diff <= hours * 60 * 60 * 1000;
};