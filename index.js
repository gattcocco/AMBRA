// Ricava gli elementi dal DOM
let addBtn = document.getElementById('addTodoBtn');
let todoInput = document.getElementById('todoInput');
let taskList = document.getElementById('taskList');

// Quando clicchi il bottone
addBtn.addEventListener('click', () => {
    console.log("clicked add todo button", addBtn);

    // Prendi il testo dell’input
    let testo = todoInput.value;
    console.log("Ue pirletta hai scritto:", testo);

    // Crea un nuovo elemento <li>
    let nuovoTask = document.createElement('li');
    nuovoTask.textContent = testo;

    // Aggiunge il <li> alla lista
    taskList.appendChild(nuovoTask);

    // Pulisce l'input
    todoInput.value = "";
});
