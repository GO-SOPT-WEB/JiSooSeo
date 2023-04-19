import './style.css';
import { data } from './data';

document.querySelector('#app').innerHTML = `
<header class="header mobile">🌷 WEB TO DO MATE 🌷</header>
<main class="main mobile">
<section class="calendar">
    <div class="calendar__column">
    </div>
    <ul class="calendar__column">
    </ul>
</section>
<section class="lists">
</section>
</main>
<footer class="footer mobile">
<button type="button" class="footer__button">
<i><img src="assets/icon/homeIc.svg" alt="달력 아이콘"/></i>
<p>달력</p>
</button>
<button type="button" class="footer__button">
<i><img src="assets/icon/personIc.svg" alt="사람 아이콘"/></i>
<p>MY</p>
</button>
</footer>
`;

{
  data.calendar.map(
    ({ id, day }) =>
      (document.querySelector('div.calendar__column').innerHTML += `
      <p class="calendar__column--days">${day}</p>
  `)
  );
}

{
  data.calendar.map(
    ({ id, list, date }) =>
      (document.querySelector('ul.calendar__column').innerHTML += `
      <li>
          <i class="calendar__column--to--do--list">${list}</i>
          <p class="calendar__column--date">${date}</p>
      </li>
  `)
  );
}

{
  data.lists.map(
    ({ id, header, todos }) =>
      (document.querySelector('.lists').innerHTML += `
      <article class="list">
          <header class="list__header">${header}<i class="list__header--add--btn">+</i></header>
          <ul id=${header}>
            ${todos.map(
              (todo, idx) =>
                `
                <li class="list__column">
                  <label for="${header}__input-text${idx + 1}">🎁 </label>
                  <input type="checkbox" id="${header}__input-text${idx + 1}" />
                  <p class="list__column__text">${todo}</p>
                </li>
                `
            )}
            </ul>
      </article>
      `)
  );
}
