'use strict';
function theKeyboard(e) {
  const active = 'active';
  const inactive = 'inactive';

  const keyboard = document.querySelector('.keyboard');
  const inputWord = document.querySelector('.input_word');

  const keyboardKeys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  keyboardKeys.map((l) => {
    const button = document.createElement('button');
    button.classList.add('key_btn');
    button.textContent = l;
    keyboard.append(button);

    button.addEventListener('click', function () {
      let l = this.textContent;
      inputWord.append(l);
      l = e.target.value;
    });
    console.log(value);
  });
}

function sayHi(user) {
  return `Hello, ${user}!`;
}

function sayBye(user) {
  return `Bye, ${user}!`;
}

export { sayHi, sayBye, theKeyboard };
