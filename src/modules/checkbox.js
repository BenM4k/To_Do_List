export function toggleChange(index, tasks){
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function ClearAllCompleted(tasks){
    const temp = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            temp.push(tasks[i]);
        }
    }

    const newTasks = tasks.filter(task => task.completed === false);

    for (let i = 0; i < newTasks.length; i++){
        newTasks[i].index = i + 1;
    } 
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}