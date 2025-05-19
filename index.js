// Per farti capire come muoverti sul dom

// Ricava l'elemento con id xxx
let addBtn = document.getElementById('addTodoBtn');

// Aggiungi un listener: quando verrà triggerato l'event "click", chiama la funzione e printa col console.log
addBtn.addEventListener('click', () => {
    console.log("clicked add todo button", addBtn);
});

// Ricava il testo di quello che hai scritto nel campo todoInput

// Quando premi il tasto, fai prima una prova printandone il contenuto nella console.
// La console si apre su browser: tasto destro, developer tools, console.

// Dopo la prova, prova ad aggiungere il testo sotto dove avevi pensato.