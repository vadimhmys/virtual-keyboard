/* eslint-disable import/extensions */
import { arrayOfAllCodes } from './Init.js';

function runPhysicalKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (arrayOfAllCodes.includes(e.code)) {
      const key = document.querySelector(`.${e.code}`);
      const generatedEvent = new MouseEvent('click', { bubbles: true, cancelable: true, composed: true });
      key.dispatchEvent(generatedEvent);
    }
  });
}

export default runPhysicalKeyboard;
