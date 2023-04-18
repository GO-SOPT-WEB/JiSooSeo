//네비게이션 태그 필터링
function selectCategory() {
  const check = document.getElementsByName('category');

  let check_box = [];
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      check_box.push(check[i].value);
    }
  }
}
