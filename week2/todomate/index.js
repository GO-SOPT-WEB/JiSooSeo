// // // index.js
// // import Home from './src/pages/home';
import createRouter from './src/components/router.js';
// // import MyCategory from './src/pages/mycategory';

document.querySelector('#app').innerHTML += `
<footer class="footer mobile">
<a href="#/">
  <button type="button" class="footer__button" data-navigate="#/" id="home"">
    <i><img src="assets/icon/homeIc.svg" alt="달력 아이콘" /></i>
    <p>달력</p>
  </button>
</a>
<a href="#/mycategory">
  <button type="button" class="footer__button" data-navigate="#/mycategory" id="mycategory">
    <i><img src="assets/icon/personIc.svg" alt="사람 아이콘" /></i>
    <p>MY</p>
  </button>
</a>
</footer>
`;

// const container = document.querySelector('#app');
// const pages = {
//   home: Home,
//   mycategory: MyCategory,
//   //   home: () => (container.innerText = 'home page'),
//   //   mycategory: () => (container.innerText = 'mycategory page'),
// };

const router = createRouter();

// // router.addRoute('#/', pages.home).addRoute('#/mycategory', pages.mycategory).start();

// window.addEventListener('click', (event) => {
//   console.log(event.target);
//   // console.log(window.location.hash);
//   // console.log(event.target.dataset.navigate);
//   router.navigate(event.target.dataset.navigate);
//   //   if (event.target.matches('[data-navigate]')) {
//   //     console.log('asdfjdfhdjjfkd');
//   //     router.navigate(event.target.dataset.navigate);
//   //   }
// });
console.log('asdfdfdfd');
// window.onload = function () {};
// console.log('asdfdfdfd');
let homeButton = document.querySelector('#home');
let myCategoryButton = document.querySelector('#mycategory');

myCategoryButton.addEventListener('click', function () {
  console.log('mycategory');
  router.navigate('/mycategory');
});

homeButton.addEventListener('click', function () {
  console.log('home');
  router.navigate('/');
});
