//네비게이션 태그 필터링
//let selected_category = [];

function checkCategory() {
  const check = document.getElementsByName('category');

  check_box = [];
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      check_box.push(check[i].value);
      //selected_category.push(check[i].value);
      let cheked_tag = document.querySelector(`#${check[i].value}`);
      cheked_tag.style.display = 'flex';
    } else {
      let cheked_tag = document.querySelector(`#${check[i].value}`);
      cheked_tag.style.display = 'none';
    }
  }

  return check_box;
}

function selectCategory() {
  checkCategory();
  // console.log(check_box);
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
function showHashtagsModal() {
  document.querySelector('.modal').style.display = 'flex';
}

function closeHashtagModal() {
  document.querySelector('.modal').style.display = 'none';
}
