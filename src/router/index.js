import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

function loadView(view) {
    return () => import('@/views/' + view);
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: loadView('Home')
        },
        {
            path: '/test',
            name: 'Test',
            component: loadView('Test')
        },
        {
            path: "*",
            component: loadView('404'),
        }
    ]
})
