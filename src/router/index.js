import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import NotFondPage from "../views/404"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "*",
            component: NotFondPage,
        }
    ]
})
