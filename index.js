// index.js

const addBtn = document.getElementById('addTodoBtn');
const todoInput = document.getElementById('todoInput');
const taskList = document.getElementById('taskList');
const deleteBtn = document.getElementById('deleteTodoBtn');

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