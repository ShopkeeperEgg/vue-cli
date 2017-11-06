import Vue from 'vue'
import Router from 'vue-router'
import en from '@/components/index'
import home from '@/components/home/home'
import detail from '@/components/detail/detail'
import app from '@/components/app/app'
import wallet from '@/components/wallet/wallet'
import recharge from '@/components/recharge/recharge'
import withdraw from '@/components/withdraw/withdraw'
import withdraw_success from '@/components/withdraw/success'
import add_new from '@/components/withdraw/add'
import withdraw_history from '@/components/withdraw/history'
import record from '@/components/record/record'
import project from '@/components/project/project'


import cn from '@/components_cn/index'
import home_cn from '@/components_cn/home/home'
import detail_cn from '@/components_cn/detail/detail'

Vue.use(Router);

export default new Router({
    routes: [
        // {name: 'root', path: '/', redirect: '/index'},
        // {path: '/index', name: 'index', component: index}
        {name: 'root', path: '/', redirect: '/en/home'},
        {
            name: 'en',
            path: '/en',
            component: en,
            children: [
                {name: 'home', path: '/en/home', component: home},
                {name: 'detail', path: '/en/detail/:id', component: detail},
                {name: 'app', path: '/en/app', component: app},
                {name: 'wallet', path: '/en/wallet', component: wallet},
                {name: 'recharge', path: '/en/recharge', component: recharge},
                {name: 'withdraw', path: '/en/withdraw', component: withdraw},
                {name: 'withdraw_success', path: '/en/withdraw_success', component: withdraw_success},
                {name: 'add_new', path: '/en/add_new', component: add_new},
                {name: 'withdraw_history', path: '/en/withdraw_history', component: withdraw_history},
                {name: 'record', path: '/en/record', component: record},
                {name: 'project', path: '/en/my_project', component: project},
            ]
        },
        {
            name: 'cn',
            path: '/cn',
            component: cn,
            children: [
                {name: 'home', path: '/cn/home', component: home_cn},
                {name: 'detail', path: '/cn/detail/:id', component: detail_cn}
            ]
        }

    ]
})
