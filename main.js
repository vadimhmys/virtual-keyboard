/* eslint-disable import/extensions */
import { init, currentLanguage, currentKeyClass } from './Init.js';

init();

const funcKeys = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',
];

let cursorPos = 0;
const textarea = document.querySelector('textarea');
let textareaFocusState = false;
let curKeyClass = currentKeyClass;
let prevKeyClass;

textarea.addEventListener('click', () => {
  setTimeout(() => {
    cursorPos = textarea.selectionEnd;
  }, 100);
});

textarea.addEventListener('focus', () => {
  textareaFocusState = true;
  textarea.selectionStart = cursorPos;
  textarea.selectionEnd = cursorPos;
  textarea.classList.add('focused');
});

document.addEventListener('click', (e) => {
  if ((e.target.closest('.key') || e.target.closest('textarea'))) {
    if (textareaFocusState) textarea.focus();
  } else {
    textareaFocusState = false;
    textarea.classList.remove('focused');
  }
});

function printChar(targetClass) {
  const key = document.querySelector(`.${targetClass} span.${currentLanguage} span.${curKeyClass}`);
  const char = key.textContent;
  const { value } = textarea;
  textarea.value = value.slice(0, cursorPos) + char + value.slice(cursorPos);
  cursorPos += 1;
}

function removeCharBeforeCursor() {
  const { value } = textarea;
  textarea.value = value.substring(0, cursorPos - 1) + value.substring(cursorPos);
  cursorPos -= 1;
  if (cursorPos < 0) { cursorPos = 0; }
}

function removeCharAfterCursor() {
  const { value } = textarea;
  textarea.value = value.slice(0, cursorPos) + value.slice(cursorPos + 1);
}

function moveLine() {
  const { value } = textarea;
  const n = '\n';
  textarea.value = value.slice(0, cursorPos) + n + value.slice(cursorPos);
  cursorPos += 1;
}

function addTab() {
  const { value } = textarea;
  const tab = '    ';
  textarea.value = value.slice(0, cursorPos) + tab + value.slice(cursorPos);
  cursorPos += 4;
}

function convertCharactersToUppercase() {
  const keyCL = document.querySelector('.CapsLock');
  keyCL.classList.toggle('active');
  const currentSpans = document.querySelectorAll(`span.${currentKeyClass}`);
  const capsSpans = document.querySelectorAll('.caps');
  if (keyCL.classList.contains('active')) {
    for (let i = 0; i < currentSpans.length; i += 1) {
      currentSpans[i].classList.add('hidden');
    }
    for (let i = 0; i < capsSpans.length; i += 1) {
      capsSpans[i].classList.remove('hidden');
    }
    prevKeyClass = curKeyClass;
    curKeyClass = 'caps';
  } else {
    for (let i = 0; i < currentSpans.length; i += 1) {
      currentSpans[i].classList.remove('hidden');
    }
    for (let i = 0; i < capsSpans.length; i += 1) {
      capsSpans[i].classList.add('hidden');
    }
    curKeyClass = prevKeyClass;
    prevKeyClass = 'caps';
  }
}

function prepareVirtualKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('click', (e) => {
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
        case 'Enter': moveLine();
          break;
        case 'Tab': addTab();
          break;
        case 'CapsLock': convertCharactersToUppercase();
          break;
        default: return 0;
      }
    }
    return undefined;
  });
}

prepareVirtualKeyboard();
