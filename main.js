const arrayOfAllKeys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'],
  ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
];

const arrayOfAllCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
  'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
  'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN',
  'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft',
  'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
];

function renderTitle() {
  const title = document.createElement('h1');
  title.textContent = 'RSS Виртуальная клавиатура';
  title.className = 'title';
  document.body.append(title);
}

function renderTextArea() {
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  document.body.append(textarea);
}

function renderKeyboard() {
  const keybord = document.createElement('div');
  keybord.className = 'keyboard';

  let indexInArrayOfAllCodes = 0;

  for (let i = 0; i < arrayOfAllKeys.length; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < arrayOfAllKeys[i].length; j += 1) {
      const div = document.createElement('div');
      div.classList.add('key');
      div.classList.add(`${arrayOfAllCodes[indexInArrayOfAllCodes]}`);
      indexInArrayOfAllCodes += 1;

      const rusSpan = document.createElement('span');
      rusSpan.classList.add('rus');
      rusSpan.classList.add('hidden');

      const caseDownSpan = document.createElement('span');
      caseDownSpan.classList.add('caseDown');
      caseDownSpan.classList.add('hidden');

      const caseUpSpan = document.createElement('span');
      caseUpSpan.classList.add('caseUp');
      caseUpSpan.classList.add('hidden');

      const capsSpan = document.createElement('span');
      capsSpan.classList.add('caps');
      capsSpan.classList.add('hidden');

      const shiftCapsSpan = document.createElement('span');
      shiftCapsSpan.classList.add('shiftCaps');
      shiftCapsSpan.classList.add('hidden');

      rusSpan.append(caseDownSpan);
      rusSpan.append(caseUpSpan);
      rusSpan.append(capsSpan);
      rusSpan.append(shiftCapsSpan);

      const engSpan = document.createElement('span');
      engSpan.classList.add('eng');

      const caseDownSpanClone = caseDownSpan.cloneNode();
      caseDownSpanClone.classList.remove('hidden');

      engSpan.append(caseDownSpanClone);
      engSpan.append(caseUpSpan.cloneNode());
      engSpan.append(capsSpan.cloneNode());
      engSpan.append(shiftCapsSpan.cloneNode());

      div.append(rusSpan);
      div.append(engSpan);
      row.append(div);
    }

    keybord.append(row);
  }

  document.body.append(keybord);
}

function init() {
  renderTitle();
  renderTextArea();
  renderKeyboard();
}

init();

/* document.onkeydown = function(event) {
  arrayOfAllCodes.push(event.code);
  console.log(arrayOfAllCodes);
}; */
