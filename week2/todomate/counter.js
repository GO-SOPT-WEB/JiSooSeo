function solvedTodo() {
  let cnt = document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).textContent;
  //cnt -= 1;
  document.querySelector(
    '.calendar__column > li:nth-child(6) > .calendar__column--to--do--list'
  ).innerText = cnt - 1;

  console.log(cnt);
}

function openModal(header) {
  let modal = document.querySelector('.modal__wrapper');
  modal.style.display = 'flex';
}

function closeModal() {
  let modal = document.querySelector('.modal__wrapper');
  modal.style.display = 'none';
}

function writeTodo(e) {
  todo = e.target.value;

  console.log(todo);
}

// function addTodo
