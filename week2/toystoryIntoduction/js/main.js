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
        cards[i].style.display = 'flex';
      }
      return;
    }
    for (let i = 0; i < cards.length; i++) {
      let cards_category = cards[i].getAttribute('value');
      let selected_cards = document.querySelectorAll(`.${cards_category}`);
      for (let j = 0; j < selected_cards.length; j++) {
        if (check_box.includes(cards_category)) {
          selected_cards[j].style.display = 'flex';
        } else {
          selected_cards[j].style.display = 'none';
        }
      }
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'flex';
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
