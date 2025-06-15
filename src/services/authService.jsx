export const registerUser = async (email, password) => {
  // Simulated API call to register a user
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existing = users.find((user) => user.email === email);
  if (existing) throw new Error("User already exists");

  const newUser = { id: Date.now(), email, password, role: "user" };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return newUser;
};

export const loginUser = async (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");
  return user;
};