function setThumbnail(event) {
  let reader = new FileReader();

  reader.onload = function (event) {
    let img = document.createElement('img');
    img.setAttribute('src', event.target.result);
    img.setAttribute('class', 'form__info__img');
    document.querySelector('.form__info__img--container').appendChild(img);
  };

  document.querySelector('.form__info__img--add-img').style.display = 'none';

  reader.readAsDataURL(event.target.files[0]);
}

function submit() {
  let name = document.querySelector('.form__info__input').value;
  let hashtags = document.querySelector('.form__info__input').value;
  let categorys = document.querySelector('.toy-category');
  let category = categorys.options[categorys.selectedIndex].value;
  let image = document.querySelector('.form__info__img').src;

  localStorage.setItem('name', name);
  localStorage.setItem('hashtags', hashtags);
  localStorage.setItem('category', category);
  localStorage.setItem('image', image);

  var a = document.createElement('a');
  a.href = './index.html';
  document.body.appendChild(a);
  a.click();
  setTimeout((_) => {
    window.URL.revokeObjectURL(url);
  }, 60000);
  a.remove();
}
