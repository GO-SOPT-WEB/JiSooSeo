import { data } from "../components/data";

export function MyCategory() {
  document.querySelector("#app").innerHTML = `
<header class="header mobile">🌷 WEB TO DO MATE 🌷</header>
<main class="main mobile">
  <section class="calendar">
    <ul class="calendar__column--flex">
     
    </ul>
  </section>
  <section class="lists"></section>
</main>
<footer class="footer mobile">
<a href="/">
  <button type="button" class="footer__button" data-navigate="/" id="home"">
    <i><img src="assets/icon/homeIc.svg" alt="달력 아이콘" /></i>
    <p>달력</p>
  </button>
</a>
<a href="/mycategory">
  <button type="button" class="footer__button" data-navigate="/mycategory" id="mycategory">
    <i><img src="assets/icon/personIc.svg" alt="사람 아이콘" /></i>
    <p>MY</p>
  </button>
</a>
</footer>
`;

  const list = document.querySelector(".calendar__column--flex");

  {
    data.lists.map(
      ({ header }) =>
        (list.innerHTML += `
      <li class="calendar__column--flex__header" draggable="true">${header}</li>
      `),
    );
  }

  let currentItemIndex = null;
  let currentItem = null;

  list.addEventListener("dragstart", (e) => {
    currentItem = e.target;
    const listArr = [...currentItem.parentElement.children];
    currentItemIndex = listArr.indexOf(currentItem);
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", (e) => {
    e.preventDefault();

    const currentDropItem = e.target;
    const listArr = [...currentItem.parentElement.children];
    const dropItemIndex = listArr.indexOf(currentDropItem);

    if (currentItemIndex < dropItemIndex) {
      currentDropItem.after(currentItem);
    } else {
      currentDropItem.before(currentItem);
    }

    const storeList = [];
    {
      [...e.target.parentElement.children].map(({ innerText }) => storeList.push(innerText));
    }

    window.localStorage.setItem("categorys", storeList);
  });
}
