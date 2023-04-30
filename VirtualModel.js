/* eslint-disable import/extensions */
import { currentLanguage, currentKeyClass } from './Init.js';

function runVirtualKeyboard() {
  const funcKeys = [
    'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',
  ];

  let cursorPos = 0;
  const textarea = document.querySelector('textarea');
  let textareaFocusState = false;
  let curKeyClass = currentKeyClass;
  let prevKeyClass;
  let countPressCL = 0;

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

  function changeCharactersByPressCapsLock() {
    countPressCL += 1;
    const keyCL = document.querySelector('.CapsLock');
    if (countPressCL % 2 !== 0) {
      keyCL.classList.add('active');
      const hiddenSpans = document.querySelectorAll(`span.${curKeyClass}`);
      const visibleSpans = document.querySelectorAll('.caps');

      for (let i = 0; i < hiddenSpans.length; i += 1) {
        hiddenSpans[i].classList.add('hidden');
      }
      for (let i = 0; i < visibleSpans.length; i += 1) {
        visibleSpans[i].classList.remove('hidden');
      }

      prevKeyClass = curKeyClass;
      curKeyClass = 'caps';
    } else {
      keyCL.classList.remove('active');
      const visibleClass = (curKeyClass === 'caps') ? prevKeyClass : curKeyClass;
      const hiddenSpans = document.querySelectorAll('.caps');
      const visibleSpans = document.querySelectorAll(`.${visibleClass}`);

      for (let i = 0; i < hiddenSpans.length; i += 1) {
        hiddenSpans[i].classList.add('hidden');
      }
      for (let i = 0; i < visibleSpans.length; i += 1) {
        visibleSpans[i].classList.remove('hidden');
      }

      if (curKeyClass === 'caps') {
        curKeyClass = prevKeyClass;
        prevKeyClass = 'caps';
      }
    }
  }

  function changeCharactersByPressShift() {
    const hiddenSpans = document.querySelectorAll(`span.${curKeyClass}`);
    const visibleSpans = document.querySelectorAll('span.shiftCaps');

    for (let i = 0; i < hiddenSpans.length; i += 1) {
      hiddenSpans[i].classList.add('hidden');
    }
    for (let i = 0; i < visibleSpans.length; i += 1) {
      const parentDiv = visibleSpans[i].parentElement.parentElement;
      const parentClass = parentDiv.getAttribute('class').split(' ')[1];
      if (!funcKeys.includes(parentClass)) {
        if (countPressCL % 2 !== 0) {
          visibleSpans[i].textContent = visibleSpans[i].textContent.toLowerCase();
        } else {
          visibleSpans[i].textContent = visibleSpans[i].textContent.toUpperCase();
        }
      }
      visibleSpans[i].classList.remove('hidden');
    }
  }

  function changeCharactersByReleaseShift() {
    const hiddenSpans = document.querySelectorAll('span.shiftCaps');
    const visibleSpans = document.querySelectorAll(`span.${curKeyClass}`);

    for (let i = 0; i < hiddenSpans.length; i += 1) {
      hiddenSpans[i].classList.add('hidden');
    }
    for (let i = 0; i < visibleSpans.length; i += 1) {
      const parentDiv = visibleSpans[i].parentElement.parentElement;
      const parentClass = parentDiv.getAttribute('class').split(' ')[1];
      if (!funcKeys.includes(parentClass)) {
        if (countPressCL % 2 !== 0) {
          visibleSpans[i].textContent = visibleSpans[i].textContent.toUpperCase();
        } else {
          visibleSpans[i].textContent = visibleSpans[i].textContent.toLowerCase();
        }
      }
      visibleSpans[i].classList.remove('hidden');
    }
  }

  function prepareVirtualKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    const keyShiftLeft = document.querySelector('.ShiftLeft');
    const keyShiftRight = document.querySelector('.ShiftRight');

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
          case 'CapsLock': changeCharactersByPressCapsLock();
            break;
          default: return 0;
        }
      }
      return undefined;
    });

    keyShiftLeft.addEventListener('mousedown', changeCharactersByPressShift);
    keyShiftRight.addEventListener('mousedown', changeCharactersByPressShift);
    keyShiftLeft.addEventListener('mouseup', changeCharactersByReleaseShift);
    keyShiftRight.addEventListener('mouseup', changeCharactersByReleaseShift);
  }

  prepareVirtualKeyboard();
}

export default runVirtualKeyboard;
