import Home from '../pages/home';
import MyCategory from '../pages/mycategory';
const pages = {
  home: (window.onload = Home),
  mycategory: (window.onload = MyCategory),
};

export default function createRouter() {
  const routes = []; // 애플리케이션의 경로 목록들을 담을 배열이다. 클로저를 이용하여 데이터를 추가한다.

  const router = {
    // 라우터 기능 1. 애플리케이션의 경로 목록들을 저장한다.
    // addRoute(fragment, component) {
    //   routes.push({ fragment, component });
    //   //   console.log(routes);
    //   //   return this;
    // },

    // // 라우터 기능 2. 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
    // start() {
    //   // routes 배열에서 현재 브라우저 hash값과 동일한 해시값을 가진 구성 요소를 찾는다.
    //   const checkRoutes = () => {
    //     const currentRoute = routes.find((route) => route.fragment === window.location.hash);
    //     // console.log();
    //     // currentRoute.component(); // 페이지 이동을 보여주기 위해 innerText를 변경하는 메서드
    //   };

    //   window.addEventListener('hashchange', checkRoutes); // 브라우저에서 hash값이 바뀔때 발생하는 이벤트.
    //   checkRoutes();
    // },
    navigate(fragment) {
      //   console.log('들어옴');
      fragment === '/' ? pages.home : pages.mycategory;
      //   window.location.hash = fragment;
    },
  };

  return router;
}

// const router = createRouter();
// let homeButton = document.querySelector('#home');
// let myCategoryButton = document.querySelector('#mycategory');

// myCategoryButton.addEventListener('click', function () {
//   console.log('mycategory');
//   router.navigate('/mycategory');
// });

// homeButton.addEventListener('click', function () {
//   console.log('home');
//   router.navigate('/');
// });
// //
