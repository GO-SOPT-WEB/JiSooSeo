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
  let background = document.querySelector('.mobile');
  let modal = document.querySelector('.modal');

  background.style.filter = 'blur(0.3rem)';
  modal.style.display = 'flex';
}

function closeModal() {
  let background = document.querySelector('.mobile');
  let modal = document.querySelector('.modal');

  background.style.filter = 'blur(0rem)';
  modal.style.display = 'none';
}
