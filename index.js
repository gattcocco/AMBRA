// index.js

const addBtn    = document.querySelector('#addTodoBtn');
const todoInput = document.querySelector('#todoInput');
const taskList  = document.querySelector('#todoList');
const deleteBtn = document.querySelector('#deleteTodoBtn');

addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (!text) return;

  const item = document.createElement('li');
  item.textContent = text;
  item.addEventListener('click', () => item.classList.toggle('completed'));

  taskList.appendChild(item);
  todoInput.value = '';
});

deleteBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});