import { Home } from "./src/pages/home";
import { MyCategory } from "./src/pages/mycategory";

const ROUTE_LIST = [
  { path: "/", element: Home },
  { path: "/mycategory", element: MyCategory },
];

export default class App {
    constructor($container) {
        this.$container = $container;
        let currentPage = undefined;

        const init = () => {
            const findMatchedRoute = () => ROUTE_LIST.find((route) => route.path === location.pathname);

            const route = () => {
                currentPage = null;
                const TargetPage = findMatchedRoute()?.element || Error404;
                currentPage = new TargetPage(this.$container);
            };

            route();
        };
        init();
    }
}