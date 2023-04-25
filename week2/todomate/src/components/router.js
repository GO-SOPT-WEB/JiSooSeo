import { Home } from '../pages/home';
import { MyCategory } from '../pages/mycategory';
const pages = {
  home: (window.onload = () => Home),
  mycategory: (window.onload = () => MyCategory),
};

export function createRouter() {
  const router = {
    navigate(fragment) {
      fragment === '/' ? pages.home : pages.mycategory;
    },
  };

  return router;
}
