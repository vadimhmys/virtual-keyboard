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

const charSets = {
  rusCaseDownChars: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  rusCaseUpChars: [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  rusCapsChars: [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  rusShiftCapsChars: [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  engCaseDownChars: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  engCaseUpChars: [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  engCapsChars: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
  engShiftCapsChars: [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',
  ],
};

export const currentLanguage = 'eng';
export const currentKeyClass = 'caseDown';

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

      engSpan.append(caseDownSpan.cloneNode());
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

export function renderKeys(language, classOfSpan) {
  const charArrayName = `${language}${classOfSpan[0].toUpperCase()}${classOfSpan.slice(1)}Chars`;
  const spanCollection = document.querySelectorAll(`span.${language} > span.${classOfSpan}`);
  for (let i = 0; i < spanCollection.length; i += 1) {
    spanCollection[i].textContent = charSets[charArrayName][i];
  }
}

function showKeys() {
  const visibleKeys = document.querySelectorAll(`span.${currentLanguage} > span.${currentKeyClass}`);
  for (let i = 0; i < visibleKeys.length; i += 1) {
    visibleKeys[i].classList.remove('hidden');
  }
}

function renderDescription(text) {
  const p = document.createElement('p');
  p.className = 'description';
  p.textContent = text;
  document.body.append(p);
}

function renderLanguageSwitchInstructions(text) {
  const p = document.createElement('p');
  p.className = 'language';
  p.textContent = text;
  document.body.append(p);
}

export function init() {
  renderTitle();
  renderTextArea();
  renderKeyboard();
  renderKeys('eng', 'caseDown');
  renderKeys('eng', 'caseUp');
  renderKeys('eng', 'caps');
  renderKeys('eng', 'shiftCaps');
  renderKeys('rus', 'caseDown');
  renderKeys('rus', 'caseUp');
  renderKeys('rus', 'caps');
  renderKeys('rus', 'shiftCaps');
  showKeys();
  renderDescription('Клавиатура создана в операционной системе Windows');
  renderLanguageSwitchInstructions('Для переключения языка комбинация: левые Shift + Alt');
}
