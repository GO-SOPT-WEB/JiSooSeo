export default function MyCategory() {
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

`;
}
