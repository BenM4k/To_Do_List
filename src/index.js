import { addTask, deleteTask, editTask } from './modules/operations.js';
import { toggleChange, ClearAllCompleted } from './modules/checkbox.js';
// import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTask(task) {
  const { description, completed, index } = task;
  const currentTask = `
    <li class="${index}">
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}/>
        <p class="description" contenteditable="true">${description}</p>
        <span class="burger"></span>
    </li>
    `;
  return currentTask;
}

const container = document.querySelector('.container');
const click = document.querySelector('.click');
const add = document.querySelector('#add_text');

for (let i = 0; i < tasks.length; i += 1) {
  const content = displayTask(tasks[i]);
  container.innerHTML += content;
}

click.addEventListener('click', (e) => {
  e.preventDefault();

  if (add.value !== '') {
    addTask(add.value, tasks);
    window.location.reload();
  }
});

const burger = document.querySelectorAll('.burger');
burger.forEach((burg) => {
  burg.addEventListener('click', () => {
    const list = burg.parentNode.className;
    deleteTask(list, tasks);
    window.location.reload();
  });
});

const description = document.querySelectorAll('.description');
description.forEach((desc) => {
  desc.addEventListener('input', () => {
    const list = desc.parentNode.className;
    const newDesc = desc.textContent;
    editTask(list - 1, newDesc, tasks);
  });
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox =>{
  let list = checkbox.parentNode.className;
  checkbox.addEventListener('click', ()=>{
    toggleChange(list - 1, tasks)
  });
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>{
  ClearAllCompleted(tasks);
  window.location.reload();
})