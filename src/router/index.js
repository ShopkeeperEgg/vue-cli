import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import detail from '@/components/detail/detail'

Vue.use(Router);

export default new Router({
    routes: [
        // {name: 'root', path: '/', redirect: '/index'},
        // {path: '/index', name: 'index', component: index}
        {name: 'root', path: '/', redirect: '/home'},
        {name: 'home', path: '/home', component: home},
        {name: 'detail', path: '/detail/:id', component: detail},
    ]
})
