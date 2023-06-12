function solvedTodo(tag) {
  let input = document.querySelector(`#${tag}`);
  let cnt = document.querySelector(".calendar__column > li:nth-child(6) > .calendar__column--to--do--list").textContent;

  if (!input.checked) {
    document.querySelector(".calendar__column > li:nth-child(6) > .calendar__column--to--do--list").innerText = cnt - 1;
  } else {
    document.querySelector(".calendar__column > li:nth-child(6) > .calendar__column--to--do--list").innerText =
      parseInt(cnt) + 1;
  }
}

function openModal(header) {
  let modal = document.querySelector(".modal__wrapper");
  modal.style.display = "flex";
  let input_tag = document.querySelector(".modal--write--todo");
  input_tag.focus();

  clicked_header = header;
}

function closeModal() {
  let modal = document.querySelector(".modal__wrapper");
  modal.style.display = "none";
}

function addTodo() {
  let input = document.querySelector(".modal--write--todo").value;
  let id = clicked_header.getAttribute("id");
  let tab = document.querySelector(`#${id}`);

  const array = [];
  const data = {
    calendar: [
      {
        id: 0,
        day: "월",
        list: 7,
        date: 3,
      },
      {
        id: 1,
        day: "화",
        list: 8,
        date: 4,
      },

      {
        id: 2,
        day: "수",
        list: 6,
        date: 5,
      },

      {
        id: 3,
        day: "목",
        list: 6,
        date: 6,
      },

      {
        id: 4,
        day: "금",
        list: 7,
        date: 7,
      },

      {
        id: 5,
        day: "토",
        list: 25,
        date: 8,
      },

      {
        id: 6,
        day: "일",
        list: 10,
        date: 9,
      },
    ],
    lists: [
      {
        id: 0,
        header: "SOPT",
        todos: ["해삐🌼웹팟 세미나", "금잔디 코드리뷰", "아티클스터디 아티클", "js스터디 아티클", "Track1 개발"],
      },
      {
        id: 1,
        header: "CAU",
        todos: ["한자 문제 제작 과제", "한자 필사 과제", "강의 수강"],
      },
      {
        id: 2,
        header: "ROUTINE",
        todos: ["필라테스", "독서", "1일1커밋"],
      },
      {
        id: 3,
        header: "ETC",
        todos: ["마스크 주문하기", "당근 택배부치기"],
      },
      {
        id: 4,
        header: "FRIENDS",
        todos: [
          "버즈 생일 챙기기",
          "우디 생일 챙기기",
          "제시 생일 챙기기",
          "Track1 릴리즈 기념 인형 만들기",
          "보핍 안부 인사",
        ],
      },
      {
        id: 5,
        header: "CLEAN",
        todos: ["청소", "빨래", "환기"],
      },
      {
        id: 6,
        header: "MEETING",
        todos: ["스타트업 서핑 킥오프", "Track1 코어타임"],
      },
      {
        id: 7,
        header: "PLAY",
        todos: ["노래듣기", "더 글로리 보기"],
      },
    ],
  };

  data.lists.map(({ todos }) => array.push(...todos));

  if (!array.includes(input)) {
    tab.innerHTML += `
    <li class="list__column__new">
      <label for="${id}__input-text" onclick="solvedTodo('${id}__input-text')">🎁 </label>
      <input type="checkbox" id="${id}__input-text" />
      <p class="list__column__text">${input}</p>
    </li>
  `;
  } else {
    alert("이미 있는 일정입니다");
  }

  let input_tag = document.querySelector("input");
  input_tag.value = "";
  input_tag.focus();

  let cnt = document.querySelector(".calendar__column > li:nth-child(6) > .calendar__column--to--do--list").textContent;
  document.querySelector(".calendar__column > li:nth-child(6) > .calendar__column--to--do--list").innerText =
    parseInt(cnt) + 1;
}
