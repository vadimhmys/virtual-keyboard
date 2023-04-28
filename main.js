function renderTitle() {
  const title = document.createElement('h1');
  title.textContent = 'RSS Виртуальная клавиатура';
  title.className = 'title';
  document.body.append(title);
}

function init() {
  renderTitle();
}

init();
