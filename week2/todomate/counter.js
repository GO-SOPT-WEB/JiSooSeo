function solvedTodo(tag) {
  console.log('ddd');
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

  clicked_header = header;
}

function closeModal() {
  let modal = document.querySelector('.modal__wrapper');
  modal.style.display = 'none';
}

function addTodo() {
  let input = document.querySelector('.modal--write--todo').value;
  let tab = document.querySelector(`#${clicked_header.getAttribute('id')}`);
  tab.innerHTML += `
  <li class="list__column__new">
    <label for="${tab}__input-text4" onclick="solvedTodo()">🎁 </label>
    <input type="checkbox" id="${tab}__input-text4" />
    <p class="list__column__text">${input}</p>
  </li>
  `;

  input = '';
  closeModal();
  let cnt = document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).textContent;
  document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).innerText = parseInt(cnt) + 1;
}
