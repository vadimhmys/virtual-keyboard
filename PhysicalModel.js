/* eslint-disable import/extensions */
import { arrayOfAllCodes } from './Init.js';

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
}

export default runPhysicalKeyboard;
