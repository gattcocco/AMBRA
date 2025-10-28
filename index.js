const addTodoButton = document.querySelector("#add-todo-button");
const todoTextInput = document.querySelector("#todo-text-item"); // aggiornato per il div contenteditable
const todoList = document.querySelector("#todo-list");

addTodoButton.addEventListener("click", () => {
  addTodoItem();
});

function addTodoItem() {
  // Prendi il testo dal div contenteditable
  const text = todoTextInput.innerText.trim();
  if (!text) return;

  // Pulisci il div dopo aver preso il testo
  todoTextInput.innerText = "";

  // Crea il div principale del todo
  const todoItem = document.createElement("div");
  todoList.appendChild(todoItem);

  // Crea il div che contiene il testo del todo
  const todoTextItem = document.createElement("div");
  todoTextItem.textContent = text;
  todoItem.appendChild(todoTextItem);

  // Crea il bottone per rimuovere il todo
  const removeTodoButton = createRemoveTodoButton(todoItem);
  todoItem.appendChild(removeTodoButton);

  // Aggiungi styling al todo item principale
  todoItem.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "border",
    "border-slate-300",
    "rounded-md",
    "p-4",
    "mb-2"
  );

  // Aggiungi styling al testo del todo
  todoTextItem.classList.add("text-left", "flex-1");
}

function createRemoveTodoButton(parent) {
  const removeTodoButton = document.createElement("div");
  removeTodoButton.textContent = "X";

  removeTodoButton.addEventListener("click", () => {
    parent.remove();
  });

  removeTodoButton.classList.add(
    "text-red-500",
    "hover:text-red-700",
    "cursor-pointer",
    "font-bold",
    "ml-4"
  );

  return removeTodoButton;
}
