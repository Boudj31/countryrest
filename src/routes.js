import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import CountryPage from './views/CountryPage.vue';



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "home", component: Home, alias: '/home'},
        { path: '/country/:idCountry',props: true, name: "CountryPage", component: CountryPage}
    ],
 
})


export default router;