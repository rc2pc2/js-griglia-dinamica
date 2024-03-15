//# <article class="square"></article>

// creo una funzione che non ha argomenti
function generateNewGridSquare(content){
   // definisco un nuovo elemento del dom e lo creo come <article></article>
   const newElement = document.createElement('article');
   newElement.innerHTML = '<span>' + content + '</span>';

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
   const newSquare = generateNewGridSquare(index + 1);

   // ? quando l-utente clicca sul nostro quadrato
   newSquare.addEventListener('click', function(){

      // # se il contenuto e' pari
      if (isEven(index + 1)){
         // #aggiungo la classe clicked
         newSquare.classList.add('clicked');
      } else {
         // #altrimenti aggiungo la classe clicked-odd
         newSquare.classList.add('clicked-odd');
      }
   });

   // % aggiungo il mio nuovo quadrato alla grid precedemente selezionata
   gridElement.appendChild(newSquare);
}


function isEven(number){
   if (number % 2 ===0){
      return true;
   } else {
      return false;
   }
}