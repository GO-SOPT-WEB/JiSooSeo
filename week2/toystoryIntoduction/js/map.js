import { data } from './cards.js';

// 카드 map 함수
{
  data.cards.map(
    ({ id, name, hashtags, img, category }) =>
      (document.querySelector('.card__section').innerHTML += `
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
  </article>`)
  );
}
