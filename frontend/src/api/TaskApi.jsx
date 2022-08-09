const baseUrl = `${import.meta.env.VITE_API_URL}/tasks`;

export const loadTasks = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getTask = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const createTask = (task) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      namapegawai: todo.namapegawai,
      deadline: todo.deadline,
      isitask: todo.isitask,
      completed: todo.completed,
    }),
  }).then((res) => res.json());
};

export const updateTask = (task) => {
  return fetch(`${baseUrl}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      namapegawai: todo.namapegawai,
      deadline: todo.deadline,
      isitask: todo.isitask,
      completed: task.completed,
    }),
  });
};

export const deleteTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then(res => res.json());
};
