import { data } from "../components/data";

export function Home() {
  document.querySelector("#app").innerHTML = `
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
<a href="/">
  <button type="button" class="footer__button" data-navigate="/" id="home">
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

  {
    data.calendar.map(
      ({ id, day }) =>
        (document.querySelector("div.calendar__column").innerHTML += `
        <p class="calendar__column--days">${day}</p>
    `),
    );
  }

  {
    data.calendar.map(
      ({ id, list, date }) =>
        (document.querySelector("ul.calendar__column").innerHTML += `
        <li>
            <i class="calendar__column--to--do--list">${list}</i>
            <p class="calendar__column--date">${date}</p>
        </li>
    `),
    );
  }

  const basicCategorys = window.localStorage.getItem("categorys").split(",");
  // console.log(basicCategorys.split(","));

  // if (basicCategorys.length === 0) {
  //   {
  //     data.categorys.map(
  //       ({ category }) =>
  //         (document.querySelector("ul.calendar__column--flex").innerHTML += `
  //     <li class="calendar__column--flex__header" draggable="true" value=${category}>${category}</li>
  //     `),
  //     );
  //   }
  // } else {
  //   document.querySelector("ul.calendar__column--flex").innerHTML += basicCategorys;
  // }

  // const datas = [];

  if (!basicCategorys) {
    {
      data.lists.map(
        ({ id, header, todos }) =>
          (document.querySelector(".lists").innerHTML += `
          <article class="list">
            <aside class="modal__wrapper">
              <div class="modal">
              <i class="modal--close--tag" onclick="closeModal()">x</i>
              <input type="text" placeholder="할 일을 입력해주세요" class="modal--write--todo"/>
              <button type="submit" onclick="addTodo()">추가</button>
              <div>
            </aside>
              <header class="list__header">${header}<i class="list__header--add--btn" onclick="openModal(${header})">+</i></header>
              <ul id=${header}>
                ${todos.map(
                  (todo, idx) =>
                    `
                    <li class="list__column">
                      <label for="${header}__input-text${idx + 1}" onclick="solvedTodo('${header}__input-text${
                      idx + 1
                    }')">🎁 </label>
                      <input type="checkbox" id="${header}__input-text${idx + 1}" />
                      <p class="list__column__text">${todo}</p>
                    </li>
                    `,
                )}
                </ul>
          </article>
          `),
      );
    }
  } else {
    const newdatas = [...data.lists];
    const datas = [];
    // console.log(basicCategorys.map((category) => newdatas.filter(({ header }) => header === category)[0]));

    // console.log(basicCategorys[0]);
    // console.log(newdatas);
    datas.push(basicCategorys.map((category) => newdatas.filter(({ header }) => header === category)[0]));
    console.log(datas[0]);

    {
      datas[0].map(
        ({ id, header, todos }) =>
          (document.querySelector(".lists").innerHTML += `
          <article class="list">
            <aside class="modal__wrapper">
              <div class="modal">
              <i class="modal--close--tag" onclick="closeModal()">x</i>
              <input type="text" placeholder="할 일을 입력해주세요" class="modal--write--todo"/>
              <button type="submit" onclick="addTodo()">추가</button>
              <div>
            </aside>
              <header class="list__header">${header}<i class="list__header--add--btn" onclick="openModal(${header})">+</i></header>
              <ul id=${header}>
                ${todos.map(
                  (todo, idx) =>
                    `
                    <li class="list__column">
                      <label for="${header}__input-text${idx + 1}" onclick="solvedTodo('${header}__input-text${
                      idx + 1
                    }')">🎁 </label>
                      <input type="checkbox" id="${header}__input-text${idx + 1}" />
                      <p class="list__column__text">${todo}</p>
                    </li>
                    `,
                )}
                </ul>
          </article>
          `),
      );
    }
  }
  // console.log(basicCategorys !== null);
  // {
  //   data.lists.map(
  //     ({ id, header, todos }) =>
  //       (document.querySelector(".lists").innerHTML += `
  //       <article class="list">
  //         <aside class="modal__wrapper">
  //           <div class="modal">
  //           <i class="modal--close--tag" onclick="closeModal()">x</i>
  //           <input type="text" placeholder="할 일을 입력해주세요" class="modal--write--todo"/>
  //           <button type="submit" onclick="addTodo()">추가</button>
  //           <div>
  //         </aside>
  //           <header class="list__header">${header}<i class="list__header--add--btn" onclick="openModal(${header})">+</i></header>
  //           <ul id=${header}>
  //             ${todos.map(
  //               (todo, idx) =>
  //                 `
  //                 <li class="list__column">
  //                   <label for="${header}__input-text${idx + 1}" onclick="solvedTodo('${header}__input-text${
  //                   idx + 1
  //                 }')">🎁 </label>
  //                   <input type="checkbox" id="${header}__input-text${idx + 1}" />
  //                   <p class="list__column__text">${todo}</p>
  //                 </li>
  //                 `,
  //             )}
  //             </ul>
  //       </article>
  //       `),
  //   );
  // }
}
