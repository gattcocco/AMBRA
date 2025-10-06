// index.js
const addBtn    = document.querySelector('#addTodoBtn');
const todoInput = document.querySelector('#todoInput');
const taskList  = document.querySelector('#todoList');
const deleteBtn = document.querySelector('#deleteTodoBtn');

// helper: crea un <li> con checkbox + testo + bottone elimina
function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const label = document.createElement('label');
  label.className = 'todo-row';

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.className = 'todo-check';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const remove = document.createElement('button');
  remove.className = 'todo-remove';
  remove.setAttribute('aria-label', 'Elimina attività');
  remove.textContent = '✕';

  // toggla completato
  check.addEventListener('change', () => {
    li.classList.toggle('completed', check.checked);
  });

  // elimina solo questa voce
  remove.addEventListener('click', (e) => {
    e.stopPropagation(); // evita click “fantasma”
    li.remove();
  });

  label.append(check, span);
  li.append(label, remove);
  return li;
}

// aggiungi todo
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;
  const item = createTodoItem(text);
  taskList.appendChild(item);
  todoInput.value = '';
  todoInput.focus();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});

// svuota tutto
deleteBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
