const addTodoButton = document.querySelector("#add-todo-button");
const todoTextInput = document.querySelector("#todo-text-input");
const todoList = document.querySelector("#todo-list");

addTodoButton.addEventListener("click", () => {
  addTodoItem();
});

function addTodoItem() {
  // Get text from todo input field
  const text = todoTextInput.value.trim();
  if (!text) return;

  // Clean todo input field
  todoTextInput.value = "";

  // Create parent item (div) containing text and delete button
  const todoItem = document.createElement("div");
  todoList.appendChild(todoItem);

  // Create todo text item and append to list
  const todoTextItem = document.createElement("div");
  todoTextItem.textContent = text;
  todoItem.appendChild(todoTextItem);

  // Create remove todo button and append to parent
  const removeTodoButton = createRemoveTodoButton(todoItem);
  todoItem.appendChild(removeTodoButton);

  // Add styling (using tailwind cdn)
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

  // Style todo text (left side)
  todoTextItem.classList.add("text-left", "flex-1");
}

function createRemoveTodoButton(parent) {
  // Create (button) for single todo item in the list
  const removeTodoButton = document.createElement("div");
  removeTodoButton.textContent = "X";
  removeTodoButton.addEventListener("click", () => {
    console.log("parent", parent);
    // Guarda qui - lui non puo sapere se si tratta di un nodo html prima di eseguire il programma
    parent.remove();
  });

  // Style remove button (right side)
  removeTodoButton.classList.add(
    "text-red-500",
    "hover:text-red-700",
    "cursor-pointer",
    "font-bold",
    "ml-4"
  );

  return removeTodoButton;
}