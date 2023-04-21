function setThumbnail(event) {
  var reader = new FileReader();

  reader.onload = function (event) {
    var img = document.createElement('img');
    img.setAttribute('src', event.target.result);
    img.setAttribute('class', 'form__info__img');
    document.querySelector('.form__info__img--container').appendChild(img);
  };

  document.querySelector('.form__info__img--add-img').style.display = 'none';

  reader.readAsDataURL(event.target.files[0]);
}
