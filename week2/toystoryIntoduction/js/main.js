import { data } from './cards.js';

{
  data.cards.map(
    ({ id, name, hashtags, img }) =>
      (document.querySelector('.card__section').innerHTML += `
    <article class="card">
    <header class="card__title">${name}</header>
    <ul class="card__tags">
        <li class="card__tag">${hashtags[0]}</li>
        <li class="card__tag">${hashtags[1]}</li>
        <li class="card__tag">${hashtags[2]}</li>
    </ul>
    <i class="card__tag--plus--tag">+</i>
    <img src=${img} alt=${name} class="card__img" />
    <i class="card__icon--like">♥︎</i>
  </article>`)
  );
}
