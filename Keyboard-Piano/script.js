const notes = ["A0", "Bb0", "B0", "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1",
  "G1", "Ab1", "A1", "Bb1", "B1", "C2", "Db2", "D2", "Eb2", "E2",
  "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3",
  "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4",
  "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4",
  "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5",
  "Bb5", "B5", "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6",
  "Ab6", "A6", "Bb6", "B6", "C7", "Db7", "D7", "Eb7", "E7", "F7",
  "Gb7", "G7", "Ab7", "A7", "Bb7", "B7", "C8"];
const keywordNotes = {
  "1": "C4",
  "2": "D4",
  "3": "E4",
  "4": "F4",
  "5": "G4",
  "6": "A4",
  "7": "B4",
  "8": "C5",
  "9": "D5",
  "0": "E5",
  "q": "Db4",
  "w": "Eb4",
  "e": "Gb4",
  "r": "Ab4",
  "t": "Bb4",
  "y": "Db5",
  "u": "Eb5",
  "ı": "Gb5",
  "o": "Ab5",
  "p": "Bb5",
  "ğ": "C4",
  "ü": "D4",
  "ş": "F4",
  "i": "G4",
  "ö": "A4",
  "a": "C5",
  "s": "D5",
  "d": "F5",
  "f": "G5",
  "g": "A5",
  "h": "C6",
  "j": "D6",
  "k": "F6",
  "l": "G6",
  "ş": "C3",
  "i": "D3",
  "z": "E3",
  "x": "F3",
  "c": "G3",
  "v": "A3",
  "b": "B3",
  "n": "C6",
  "m": "D6",
  "ö": "Eb6",
  "ç": "F6",
  "ğ": "G6",
  "ü": "A6",
  " ": "B6",
  "é": "Db6"
};



// Tuşları #piano nun içine oluşturuyor
notes.forEach(e => {
  document.getElementById("piano").innerHTML += `<div class="${e[1] == "b" ? "black-key" : "white-key"} key" data-note="${e}">${e}</div>`;
});

// Piyanonun ana fonksiyonu
function playSound(e) {
  // Eğer tıklanan element tuş değilse fonksiyondan çık
  if (!e.target.classList.contains('key')) return;

  // Tuşun data-note attribute değerini al ve notaya ata
  const note = e.target.getAttribute('data-note');

  // Audio elementi oluştur ve notaya göre ses dosyasını ayarla
  const audio = document.createElement('audio');
  audio.src = `notes/${note}.mp3`;

  // Ses dosyasını başlat
  audio.play();
}

// Sayfa yüklendiğinde tuşlara click event listener ekle
window.addEventListener('load', () => {
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('click', playSound));
});





window.addEventListener("keydown", e => {
  // Tuşun data-note attribute değerini al ve notaya ata
  const note = `${keywordNotes[`${e.key}`]}`;
  if (note != "undefined") {
    // console.log(e.key, note);
    // Audio elementi oluştur ve notaya göre ses dosyasını ayarla
    const audio = document.createElement('audio');
    audio.src = `notes/${note}.mp3`;

    // Ses dosyasını başlat
    audio.play();

    // tuş stil değişikliği
    const key = document.querySelector(`.key[data-note="${note}"]`);
    key.style.backgroundColor = "grey";

  } else {
    // console.log(1111111111111111111, e.key);
  }
})
window.addEventListener("keyup", e => {
  const note = `${keywordNotes[`${e.key}`]}`;
  const key = document.querySelector(`.key[data-note="${note}"]`);
  key.style.backgroundColor = note[1] == "b" ? "black" : "white";
});


//------------------------------------------------------------//
// const golden_hours = [
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Db5', duration: 250 },
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Db5', duration: 500 },
//   { note: 'Db5', duration: 500 },
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Db5', duration: 500 },
//   { note: 'Db5', duration: 500 },
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Db5', duration: 500 },
//   { note: 'Db5', duration: 500 },
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'Gb5', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Gb4', duration: 250 },
//   { note: 'B4', duration: 250 },
//   { note: 'Db5', duration: 500 },
//   { note: 'Db5', duration: 500 },
//   { note: 'B4', duration: 500 },
//   { note: 'Gb4', duration: 250 },
// ]

// function outoPlay(array) {
//   let i = 0;
//   let e;
//   const intervalId = setInterval(() => {
//     e = array[i];
//     const key = document.querySelector(`.key[data-note="${e}"]`);
//     key.style.backgroundColor = e[1] == "b" ? "black" : "white";
//     console.log(e);
//     const audio = document.createElement('audio');
//     audio.src = `notes/${e}.mp3`;

//     // Ses dosyasını başlat
//     audio.play();

//     // tuş stil değişikliği
//     key.style.backgroundColor = "grey";


//     i++;
//     if (i >= pianoNotes.length) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
//   array.forEach(e => {
//   });
// }


// const noteMap = {
//   "A": 440.00,
//   "B": 493.88,
//   "C": 523.25,
//   "D": 587.33,
//   "E": 659.25,
//   "F": 698.46,
//   "G": 783.99
// };

// function playNotes(notes, bpm) {
//   const noteLength = (60 / bpm) * 1000;
//   notes.forEach(note => {
//     const pitch = noteMap[note.note[0]];
//     const octave = parseInt(note.duration);
//     const duration = noteLength * note.duration;
//     console.log(note, pitch, octave);
//     const isSharp = note.note[1] == "b";
//     let noteName = "";
//     if (isSharp) {
//       noteName = `${note.note[0]}b${octave}`;
//     } else {
//       noteName = `${note.note}${octave}`;
//     }
//     const audioCtx = new AudioContext();
//     const osc = audioCtx.createOscillator();
//     const gainNode = audioCtx.createGain();
//     osc.connect(gainNode);
//     gainNode.connect(audioCtx.destination);
//     osc.type = "triangle";
//     osc.frequency.value = pitch * Math.pow(2, octave/100 - 4);
//     gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
//     gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.001);
//     gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration / 1000);
//     osc.start();
//     osc.stop(audioCtx.currentTime + duration / 1000);
//     console.log(noteName, duration);
//     setTimeout(() => {}, duration);
//   });
// }
