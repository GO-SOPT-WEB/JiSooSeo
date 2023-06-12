// // import { Home } from '../pages/home';
// // import { MyCategory } from '../pages/mycategory';
// // const pages = {
// //   home: (window.onload = Home),
// //   mycategory: (window.onload = MyCategory),
// // };

// // // export function createRouter() {
// // //   const router = {
// // //     navigate(fragment) {
// // //       console.log(fragment);
// // //       // fragment === '/' ? pages.home : pages.mycategory;
// // //       fragment === '/' && pages.home;
// // //     },
// // //   };

// // //   return router;
// // // // }
// // // fragment === '/' ? pages.home : pages.home;
// // // console.log(window.location.hash);

// import Error404 from "./pages/error404";
// // import Home from "./pages/home";
// // import MyCategory from "./pages/mycategory";

// import { Home } from '../pages/home';
// import { MyCategory } from '../pages/mycategory';

// const ROUTE_LIST = [
//   { path: "/", element: Home },
//   { path: "/mycategory", element: MyCategory },
// ];

// function Router($container) {
//   this.$container = $container;
//   let currentPage = undefined;

//   const init = () => {
//     const findMatchedRoute = () =>
//       ROUTE_LIST.find((route) => route.path === location.pathname);

//     const route = () => {
//       currentPage = null;
//       const TargetPage = findMatchedRoute()?.element || Error404;
//       currentPage = new TargetPage(this.$container);
//     };

//     route();
//   };
//   init();
// }
// export default App;