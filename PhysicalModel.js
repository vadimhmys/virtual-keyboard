/* eslint-disable import/extensions */
import { arrayOfAllCodes, currentLanguage } from './Init.js';

let activeLanguage = currentLanguage;
let inactiveLanguage = (activeLanguage === 'eng') ? 'rus' : 'eng';

function runPhysicalKeyboard() {
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.repeat) return;
    if (arrayOfAllCodes.includes(e.code)) {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        const key = document.querySelector(`.${e.code}`);
        const generatedEventByPress = new MouseEvent('mousedown', { bubbles: true, cancelable: true, composed: true });
        key.dispatchEvent(generatedEventByPress);
        const generatedEventByRelease = new MouseEvent('mouseup', { bubbles: true, cancelable: true, composed: true });
        setTimeout(() => key.dispatchEvent(generatedEventByRelease), 100);
      }
      const key = document.querySelector(`.${e.code}`);
      const generatedEvent = new MouseEvent('click', { bubbles: true, cancelable: true, composed: true });
      key.dispatchEvent(generatedEvent);
    }
  });

  function changeLanguage() {
    const hiddenSpans = document.getElementsByClassName(`${activeLanguage}`);
    const visibleSpans = document.getElementsByClassName(`${inactiveLanguage}`);

    for (let i = 0; i < hiddenSpans.length; i += 1) {
      hiddenSpans[i].classList.add('hidden');
    }
    for (let i = 0; i < visibleSpans.length; i += 1) {
      visibleSpans[i].classList.remove('hidden');
    }

    const language = activeLanguage;
    activeLanguage = inactiveLanguage;
    inactiveLanguage = language;
  }

  function runOnKeys(func, ...codes) {
    const pressed = new Set();

    document.addEventListener('keydown', (event) => {
      pressed.add(event.code);

      for (let i = 0; i < codes.length; i += 1) {
        if (!pressed.has(codes[i])) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener('keyup', (event) => {
      pressed.delete(event.code);
    });
  }

  runOnKeys(
    changeLanguage,
    'ControlLeft',
    'AltLeft',
  );
}

export default runPhysicalKeyboard;
