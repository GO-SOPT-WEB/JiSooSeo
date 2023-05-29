//네비게이션 태그 필터링
function checkCategory() {
  const check = document.querySelectorAll("input[name='category']");

  check_box = [];
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      check_box.push(check[i].value);
      let cheked_tag = document.querySelector(`#${check[i].value}`);
      cheked_tag.style.display = 'flex';
    } else {
      let cheked_tag = document.querySelector(`#${check[i].value}`);
      cheked_tag.style.display = 'none';
    }
  }
  sortCategory(check_box);
}

function selectCategory() {
  checkCategory();
}

function sortCategory(check_box) {
  const cards = document.querySelectorAll('.card');

  if (!check_box.includes('total')) {
    if (check_box.length === 0) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
        setTimeout(() => {
          for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'flex';
            cards[i].style.animation = 'fadein 1s';
          }
        }, '100');
      }
      return;
    }
    for (let i = 0; i < cards.length; i++) {
      let cards_category = cards[i].getAttribute('value');
      let selected_cards = document.querySelectorAll(`.${cards_category}`);
      for (let j = 0; j < selected_cards.length; j++) {
        if (check_box.includes(cards_category)) {
          selected_cards[j].style.display = 'none';
          setTimeout(() => {
            for (let i = 0; i < cards.length; i++) {
              selected_cards[j].style.display = 'flex';
              selected_cards[i].style.animation = 'fadein 1s';
            }
          }, '100');
        } else {
          selected_cards[j].style.display = 'none';
        }
      }
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none';
      setTimeout(() => {
        for (let i = 0; i < cards.length; i++) {
          cards[i].style.display = 'flex';
          cards[i].style.animation = 'fadein 1s';
        }
      }, '100');
    }
  }
}

//선택된 태그 x 버튼 클릭 시 삭제
function deleteCategory(value) {
  let cheked_tag = document.querySelector(`#${value}`);
  cheked_tag.style.display = 'none';
  const check = document.querySelectorAll("input[name='category']");
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked && check[i].value === value) {
      check[i].checked = false;
      check_box = check_box.filter((element) => element !== check[i].value);
    }
  }
  sortCategory(check_box);
}

//해시태그 모달
function showHashtagsModal(id) {
  document.querySelectorAll('.modal')[id].style.display = 'flex';
}

function closeHashtagModal(id) {
  document.querySelectorAll('.modal')[id].style.display = 'none';
}

window.onload = function () {
  let id = localStorage.getItem('id');
  let name = localStorage.getItem('name');
  let hashtags = localStorage.getItem('hashtags');
  hashtags = hashtags.split(',');
  let category = localStorage.getItem('category');
  let img = localStorage.getItem('img');

  document.querySelector('.card__section').innerHTML += `
    <article class="card ${category}" value=${category}>
      <article class="modal">
      <ul class="modal__hashtags">
        <li class="modal__hashtag">${hashtags[0]}</li>
        <li class="modal__hashtag">${hashtags[1]}</li>
        <li class="modal__hashtag">${hashtags[2]}</li>
      </ul>
      <i class="modal--close--tag" onclick="closeHashtagModal(${id})">x</i>
    </article>
    <header class="card__title">${name}</header>
    <ul class="card__tags">
        <li class="card__tag">${hashtags[0]}</li>
        <li class="card__tag">${hashtags[1]}</li>
        <li class="card__tag">${hashtags[2]}</li>
    </ul>
    <i class="card__tag--plus--tag" onclick="showHashtagsModal(${id})">+</i>
    <img src=${img} alt=${name} class="card__img" />
    <i class="card__icon--like">♥︎</i>
  </article>`;
};
