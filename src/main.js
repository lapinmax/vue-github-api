import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter);

const routes = [
    {path: '/home', component: Home}
];

const router = new VueRouter({
    routes
});

new Vue({
    el    : '#app',
    render: h => h(App),
    router
});

new Vue({
    el    : '#home',
    render: h => h(Home),
});