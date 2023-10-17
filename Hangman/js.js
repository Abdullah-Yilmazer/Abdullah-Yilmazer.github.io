// Kelimenin asıl hali ve tahmin edilen harf sayısı
const secretWord = "ankara";
let displayWord = "";
let wordLenght = Math.floor(6 + (4 * Math.random()));
console.log(wordLenght);
let remainingAttempts = 6;
const guessedLetters = new Set();
for (let i = 0; i < wordLenght; i++) {
   displayWord += "_";
}


//// GET İsteği
fetch(`https://random-word-api.herokuapp.com/word?length=`)
   .then((response) => response.json()) //parse json data
   .then(function (todos) {
      todos.forEach((todo) => {
         console.log(todo.title); 
      });
   });

// HTML elementlerini seçme
const wordDisplay = document.querySelector(".word");
const messageDisplay = document.querySelector(".message");
const hangmanParts = document.querySelectorAll(".hangman > .man > div");

// Kelimeyi görüntüleme
wordDisplay.textContent = displayWord;

// Tahmin fonksiyonu
function guessLetter(letter) {
   if (guessedLetters.has(letter)) {
      messageDisplay.textContent = "Bu harfi zaten tahmin ettiniz.";
      return;
   }

   guessedLetters.add(letter);

   if (secretWord.includes(letter)) {
      updateDisplayWord(letter);
   } else {
      remainingAttempts--;
      updateHangman();
   }

   checkGameStatus();
}

// Kelimenin görüntülenen halini güncelleme
function updateDisplayWord(letter) {
   let newDisplayWord = "";
   for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === letter || displayWord[i] !== "_") {
         newDisplayWord += secretWord[i];
      } else {
         newDisplayWord += "_";
      }
   }
   displayWord = newDisplayWord;
   wordDisplay.textContent = displayWord;
   checkGameStatus();
}

// Asılan adamı güncelleme
function updateHangman() {
   const incorrectGuesses = Array.from(guessedLetters).filter(letter => !secretWord.includes(letter)).length;
   const hangmanPartIndex = hangmanParts.length - incorrectGuesses;

   if (hangmanPartIndex >= 0) {
      hangmanParts[hangmanPartIndex].style.display = "block";
   }
}

// Oyun durumunu kontrol etme
function checkGameStatus() {
   if (displayWord === secretWord) {
      messageDisplay.textContent = "Tebrikler, kazandınız!";
   } else if (remainingAttempts === 0) {
      messageDisplay.textContent = "Oyun bitti. Doğru kelime: " + secretWord;
   }
}

// Harf tahminlerini dinleme
document.addEventListener("keyup", function (event) {
   const letter = event.key.toLowerCase();
   if (/^[a-z]$/.test(letter)) {
      guessLetter(letter);
      console.log(letter);
   }
});
