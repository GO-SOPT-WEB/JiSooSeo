import './style.css';
import { data } from './data';

document.querySelector('#app').innerHTML = `
<header class="header mobile">🌷 WEB TO DO MATE 🌷</header>
<main class="main mobile">
<section class="calendar">
    <div class="calendar__column">
    </div>
    <ul class="calendar__column">
        <li>
            <i class="calendar__column--to--do--list">7</i>
            <p class="calendar__column--date">3</p>
        </li>
        <li>
            <i class="calendar__column--to--do--list">8</i>
            <p class="calendar__column--date">4</p>
        </li>
            <li>
            <i class="calendar__column--to--do--list">6</i>
            <p class="calendar__column--date">5</p>
        </li>
            <li>
            <i class="calendar__column--to--do--list">6</i>
            <p class="calendar__column--date">6</p>
        </li>
            <li>
            <i class="calendar__column--to--do--list">7</i>
            <p class="calendar__column--date">7</p>
        </li>
            <li>
            <i class="calendar__column--to--do--list">9</i>
            <p class="calendar__column--date">8</p>
        </li>
            <li>
            <i class="calendar__column--to--do--list">10</i>
            <p class="calendar__column--date">9</p>
        </li>
    </ul>
</section>

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
      (document.querySelector('div+.calendar__column').innerHTML += `
      <p class="calendar__column--days">${day}</p>
  `)
  );
}

{
  data.calendar.map(
    ({ id, list, date }) =>
      (document.querySelector('ul+.calendar__column').innerHTML += `
      <li>
          <i class="calendar__column--to--do--list">${list}</i>
          <p class="calendar__column--date">${date}</p>
      </li>
  `)
  );
}
