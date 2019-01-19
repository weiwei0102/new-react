import Home from "view/section/home"
import Type from "view/section/type"
import Find from "view/section/find"
import Car from "view/section/car"
import Mine from "view/section/mine"

const RouteData = [{
    path: "/home",
    component: Home
}, {
    path: "/type",
    component: Type
}, {
    path: "/find",
    component: Find
}, {
    path: "/car",
    component: Car
}, {
    path: "/mine",
    component: Mine
}]
export default RouteData;