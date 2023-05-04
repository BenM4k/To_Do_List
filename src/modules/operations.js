export function addTask(description, tasks) {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTask(index, tasks) {
  tasks.splice(index - 1, 1);
  tasks.forEach((task, i) => (task.index = i + 1));
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export function editTask(index, newDescription, tasks) {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
