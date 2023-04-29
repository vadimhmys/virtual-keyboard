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

function removeCharBefore() {
  const textarea = document.querySelector('textarea');
  let { value } = textarea;
  if (value === '') return;
  value = value.slice(0, value.length - 1);
  textarea.value = value;
}

function prepareVirtualKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('mousedown', (e) => {
    const target = e.target.closest('.key');
    if (!target) return undefined;
    const targetClass = target.getAttribute('class').split(' ')[1];
    if (!funcKeys.includes(targetClass)) {
      printChar(targetClass);
    } else {
      switch (targetClass) {
        case 'Backspace': removeCharBefore();
          break;
        default: removeCharBefore();
      }
    }
    return undefined;
  });
}

init();
prepareVirtualKeyboard();
