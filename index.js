// index.js

// ------------------------------
// 🔹 Sezione iniziale: selezione degli elementi HTML
// ------------------------------

// Prende il bottone "Add todo" dal documento
const addTodoButton = document.querySelector("#add-todo-button");

// Prende il campo di testo dove l’utente scrive il to-do
const todoTextInput = document.querySelector("#todo-text-input");

// Prende il contenitore dove verranno visualizzati i to-do
const todoList = document.querySelector("#todo-list");


// ------------------------------
// 🔹 Aggiunge un listener al bottone "Add todo"
// ------------------------------

// Quando l’utente clicca il bottone, viene eseguita la funzione che aggiunge un nuovo to-do
addTodoButton.addEventListener("click", () => {
  addTodoItem(); // chiama la funzione principale per aggiungere un nuovo elemento
});


// ------------------------------
// 🔹 Funzione che crea e aggiunge un nuovo to-do
// ------------------------------
function addTodoItem() {
  // 1️⃣ Recupera il testo scritto dall’utente
  const text = todoTextInput.value.trim();

  // Se l’input è vuoto (stringa vuota o solo spazi), non fare nulla
  if (!text) return;

  // 2️⃣ Pulisce il campo di testo (lo svuota dopo aver letto il valore)
  todoTextInput.value = "";

  // 3️⃣ Crea un contenitore principale per il singolo to-do
  const todoItem = document.createElement("div");

  // Aggiunge il contenitore del to-do alla lista principale
  todoList.appendChild(todoItem);

  // 4️⃣ Crea un elemento per visualizzare il testo del to-do
  const todoTextItem = document.createElement("div");
  todoTextItem.textContent = text; // imposta il testo del to-do
  todoItem.appendChild(todoTextItem); // lo aggiunge dentro il contenitore principale

  // 5️⃣ Crea il bottone per rimuovere il to-do (funzione definita sotto)
  const removeTodoButton = createRemoveTodoButton(todoItem);

  // Aggiunge il bottone "X" accanto al testo
  todoItem.appendChild(removeTodoButton);

  // 6️⃣ Aggiunge le classi Tailwind per lo stile del contenitore
  todoItem.classList.add(
    "flex",               // layout flessibile (testo + bottone sulla stessa riga)
    "justify-between",    // spinge il testo a sinistra e la X a destra
    "items-center",       // centra verticalmente gli elementi
    "border",             // aggiunge un bordo
    "border-slate-300",   // colore del bordo grigio chiaro
    "rounded-md",         // angoli arrotondati
    "p-4",                // padding interno
    "mb-2"                // margine inferiore
  );

  // 7️⃣ Aggiunge classi al testo per allinearlo a sinistra e occupare lo spazio disponibile
  todoTextItem.classList.add("text-left", "flex-1");
}


// ------------------------------
// 🔹 Funzione per creare il bottone "X" di rimozione
// ------------------------------
function createRemoveTodoButton(parent) {
  // 1️⃣ Crea un elemento div che funzionerà come bottone
  const removeTodoButton = document.createElement("div");

  // Imposta il testo del bottone su "X"
  removeTodoButton.textContent = "X";

  // 2️⃣ Aggiunge un evento click: quando premi, rimuove il to-do corrispondente
  removeTodoButton.addEventListener("click", () => {
    console.log("parent", parent); // serve solo per debug (puoi toglierlo)
    
    // Rimuove l’elemento padre (cioè il div che rappresenta il to-do)
    parent.remove();
  });

  // 3️⃣ Applica le classi di Tailwind per lo stile della "X"
  removeTodoButton.classList.add(
    "text-red-500",        // colore rosso di base
    "hover:text-red-700",  // colore più scuro quando ci passi sopra col mouse
    "cursor-pointer",      // cambia il cursore in "mano"
    "font-bold",           // testo in grassetto
    "ml-4"                 // margine a sinistra per distanziarlo dal testo
  );

  // 4️⃣ Restituisce il bottone "X" al chiamante
  return removeTodoButton;
}
