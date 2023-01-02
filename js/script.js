'use strict'

let instrumentArray = document.querySelectorAll('.instrument').length;
let instruments = document.querySelectorAll('.instrument');


// const playEffect = function(keyValue) {
//   let instrumentKey = document.querySelector(`.${keyValue}`);

//   instruments.forEach(ins => {
//     ins.classList.remove('active');
//     instrumentKey.classList.add('active');
//   })
// }

const playEffect = function(keyValue) {
  let instrumentKey = document.querySelector(`.${keyValue}`);

    setTimeout(() => {
      instrumentKey.classList.remove('active');
    }, 500);
    instrumentKey.classList.add('active');

}

document.addEventListener('keydown', (e) => {
  soundList(e.key);

})

instruments.forEach(int => {
  int.addEventListener('click', function(e) {
    const letter = this.textContent;
    soundList(letter);
  })
})

function soundList(key) {
  

  switch (key) {
    case 'w':
      let snare = new Audio('../sounds/snare.mp3');
      playEffect(key);
      snare.play();
      break;

    case 'a':
      let guitar = new Audio('../sounds/guitar.mp3');
      playEffect(key);
      guitar.play();
      break;

    case 's':
      let harp = new Audio('../sounds/harp.mp3');
      playEffect(key);
      harp.play();
      break;

    case 'd':
      let tambourine = new Audio('../sounds/tambourine.mp3');
      playEffect(key);
      tambourine.play();
      break;

    case 'j':
      let triangle = new Audio('../sounds/triangle.mp3');
      playEffect(key);
      triangle.play();
      break;

    case 'k':
      let maracas = new Audio('../sounds/maracas.mp3');
      playEffect(key);
      maracas.play();
      break;

    case 'l':
      let crash = new Audio('../sounds/crash.mp3');
      playEffect(key);
      crash.play();
      break;

    default: console.log('Press or type the letter of the instrument.');
  }
}