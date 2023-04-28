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

function init() {
  renderTitle();
  renderTextArea();
}

init();
