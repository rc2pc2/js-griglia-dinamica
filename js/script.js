//# <article class="square"></article>

// creo una funzione che non ha argomenti
function generateNewGridSquare(){
   // definisco un nuovo elemento del dom e lo creo come <article></article>
   const newElement = document.createElement('article');

   // aggiungo al nuovo elemento la classe .square
   newElement.classList.add('square');

   // ritorno il nuovo elemento creato
   return newElement;
}

// # recupero dal DOM l'elemento section con id grid e
// # lo assegno ad una nuova variabile globale gridElement
const gridElement = document.querySelector('section#grid');

// # ripeto per 64 volte
for (let index = 0; index < 64; index++) {
   // % creazione di un nuovo quadrato che assegno ad una nuova const newSquare
   const newSquare = generateNewGridSquare();

   // % aggiungo il mio nuovo quadrato alla grid precedemente selezionata
   gridElement.appendChild(newSquare);
}


