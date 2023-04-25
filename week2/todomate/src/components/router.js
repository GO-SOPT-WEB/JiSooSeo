import { Home } from '../pages/home';
import { MyCategory } from '../pages/mycategory';
const pages = {
  home: (window.onload = Home),
  mycategory: (window.onload = MyCategory),
};

// export function createRouter() {
//   const router = {
//     navigate(fragment) {
//       console.log(fragment);
//       // fragment === '/' ? pages.home : pages.mycategory;
//       fragment === '/' && pages.home;
//     },
//   };

//   return router;
// }
fragment === '/' ? pages.home : pages.mycategory;
console.log(window.location.hash);
