/* eslint-disable import/extensions */
import { init } from './Init.js';

const funcKeys = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',
];

function printChar(targetClass) {
  const textarea = document.querySelector('textarea');
  const key = document.querySelector(`.${targetClass}`);
  const char = key.textContent;
  textarea.value += char;
}

function prepareVirtualKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('mousedown', (e) => {
    const target = e.target.closest('.key');
    if (!target) return undefined;
    const targetClass = target.getAttribute('class').split(' ')[1];
    if (!funcKeys.includes(targetClass)) {
      printChar(targetClass);
    }
    return undefined;
  });
}

init();
prepareVirtualKeyboard();
