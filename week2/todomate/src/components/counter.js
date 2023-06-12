function solvedTodo(tag) {
  let input = document.querySelector(`#${tag}`);
  let cnt = document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).textContent;

  if (!input.checked) {
    document.querySelector(
      '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
    ).innerText = cnt - 1;
  } else {
    document.querySelector(
      '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
    ).innerText = parseInt(cnt) + 1;
  }
}

function openModal(header) {
  let modal = document.querySelector('.modal__wrapper');
  modal.style.display = 'flex';
  let input_tag = document.querySelector('.modal--write--todo');
  input_tag.focus();

  clicked_header = header;
}

function closeModal() {
  let modal = document.querySelector('.modal__wrapper');
  modal.style.display = 'none';
}

function addTodo() {
  let input = document.querySelector('.modal--write--todo').value;
  let id = clicked_header.getAttribute('id');
  let tab = document.querySelector(`#${id}`);

  tab.innerHTML += `
  <li class="list__column__new">
    <label for="${id}__input-text" onclick="solvedTodo('${id}__input-text')">🎁 </label>
    <input type="checkbox" id="${id}__input-text" />
    <p class="list__column__text">${input}</p>
  </li>
  `;

  let input_tag = document.querySelector('input');
  input_tag.value = '';
  input_tag.focus();

  let cnt = document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).textContent;
  document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).innerText = parseInt(cnt) + 1;
}
