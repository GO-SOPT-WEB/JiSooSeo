function moveMyCategory() {
  document.querySelector('#app').innerHTML = `
<header class="header mobile">🌷 WEB TO DO MATE 🌷</header>
<main class="main mobile">
  <section class="calendar">
    <ul class="calendar__column--flex">
      <li class="calendar__column--flex__header">SOPT</li>
      <li class="calendar__column--flex__header">CAU</li>
      <li class="calendar__column--flex__header">ROUTINE</li>
      <li class="calendar__column--flex__header">ETC</li>
      <li class="calendar__column--flex__header">FRIENDS</li>
      <li class="calendar__column--flex__header">CLEAN</li>
      <li class="calendar__column--flex__header">MEETING</li>
      <li class="calendar__column--flex__header">PLAY</li>
    </ul>
  </section>
  <section class="lists"></section>
</main>
<footer class="footer mobile">
  <a href="/">
    <button type="button" class="footer__button">
      <i><img src="assets/icon/homeIc.svg" alt="달력 아이콘" /></i>
      <p>달력</p>
    </button>
  </a>
  <a href="./mycategory.html">
    <button type="button" class="footer__button">
      <i><img src="assets/icon/personIc.svg" alt="사람 아이콘" /></i>
      <p>MY</p>
    </button>
  </a>
</footer>
`;
}
