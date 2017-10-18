import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
    routes: [
        // {name: 'root', path: '/', redirect: '/index'},
        // {path: '/index', name: 'index', component: index}
        {name:'root',path:'/',redirect:'/index'},
        {name:'index',path:'/index',component:index},
    ]
})
