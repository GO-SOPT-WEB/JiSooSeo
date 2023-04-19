//네비게이션 태그 필터링
// let selected_category = [];

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
}

function selectCategory() {
  checkCategory();
  //   selected_category = [...check_box];
  //console.log(check_box);
  sortCategory(check_box);
}

function sortCategory(check_box) {
  const cards = document.getElementsByClassName('card');

  if (!check_box.includes('total')) {
    for (let i = 0; i < check_box.length; i++) {
      let cards_category = document.querySelectorAll(`.${check_box[i]}`);
      for (let k = 0; k < cards_category.length; k++) {
        cards_category[k].style.display = 'flex';
      }
    }
  }
}

//태그 x 버튼 클릭 시 삭제
function deleteCategory(value) {
  let cheked_tag = document.querySelector(`#${value}`);
  cheked_tag.style.display = 'none';
  const check = document.querySelectorAll("input[name='category']");
  for (let i = 0; i < check.length; i++) {
    if (check[i].value === value) {
      check[i].checked = false;
    }
  }
  //   sortCategory(check_box);
}
// var obj = {};

// Object.defineProperty(obj, 'num', {
//   get: function () {
//     return this.value;
//   },
//   set: function (newValue) {
//     // TODO 값 변경 시 처리할 내용
//     this.value = newValue;
//   },
// });

// obj.num = 13; // 객체obj의 변수num 값 13으로 세팅
// obj.num; // 13 출력

//해시태그 모달
function showHashtagsModal(id) {
  document.querySelectorAll('.modal')[id].style.display = 'flex';
}

function closeHashtagModal(id) {
  document.querySelectorAll('.modal')[id].style.display = 'none';
}
