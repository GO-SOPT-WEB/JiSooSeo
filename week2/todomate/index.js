import { createRouter } from './src/components/router.js';
import { Home } from './src/pages/home.js';

window.onload = Home;
const router = createRouter();

let homeButton = document.querySelector('#home');
let myCategoryButton = document.querySelector('#mycategory');

// myCategoryButton.addEventListener('click', function () {
//   console.log('mycategory');
//   router.navigate('/mycategory');
// });

// homeButton.addEventListener('click', function () {
//   console.log('home');
//   router.navigate('/');
// });
