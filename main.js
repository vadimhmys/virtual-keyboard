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

function getCursorPosition(text) {
  let cursorPos = 0;
  if (document.selection) {
    text.focus();
    const sel = document.selection.createRange();
    sel.moveStart('character', -text.value.length);
    cursorPos = sel.text.length;
  } else if (text.selectionStart || text.selectionStart === '0') {
    cursorPos = text.selectionStart;
  }
  return cursorPos;
}

function removeCharBeforeCursor() {
  const textarea = document.querySelector('textarea');
  let { value } = textarea;
  if (value === '') return;
  const cursorPos = getCursorPosition(textarea);
  value = value.replace(value[cursorPos], '');
  textarea.value = value;
}

function removeCharAfterCursor() {
  const textarea = document.querySelector('textarea');
  let { value } = textarea;
  if (value === '') return;
  const cursorPos = getCursorPosition(textarea);
  value = value.replace(value[cursorPos + 1], '');
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
        case 'Backspace': removeCharBeforeCursor();
          break;
        case 'Delete': removeCharAfterCursor();
          break;
        default: removeCharBeforeCursor();
      }
    }
    return undefined;
  });
}

init();
prepareVirtualKeyboard();
