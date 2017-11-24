import Vue from 'vue'
import Router from 'vue-router'
import en from '@/components/index'
import home from '@/components/home/home'
import detail from '@/components/detail/detail'
import app from '@/components/app/app'
import exchange from '@/components/exchange/exchange'
import wallet from '@/components/wallet/wallet'
import recharge from '@/components/recharge/recharge'
import withdraw from '@/components/withdraw/withdraw'
import withdraw_success from '@/components/withdraw/success'
import add_new from '@/components/withdraw/add'
import withdraw_history from '@/components/withdraw/history'
import record from '@/components/record/record'
import project from '@/components/project/project'
import buy from '@/components/buy/buy'
import pay from '@/components/pay/pay'
import page_404 from '@/components/page404'
import settings from '@/components/settings/settings'
import password from '@/components/settings/password'
import forget_password from '@/components/settings/forgetPassword'
import change_password from '@/components/settings/change_password'
import settings_edit from '@/components/settings/edit'
import add_address from '@/components/settings/add_address'
import bind_tel from '@/components/settings/bind_tel'
import change_tel from '@/components/settings/change_tel'
import custom from '@/components/custom/custom'
import custom_home from '@/components/custom/home'


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
                {name: 'exchange', path: '/en/exchange', component: exchange},
                {name: 'wallet', path: '/en/wallet', component: wallet},
                {name: 'recharge', path: '/en/recharge', component: recharge},
                {name: 'withdraw', path: '/en/withdraw', component: withdraw},
                {name: 'withdraw_success', path: '/en/withdraw-success', component: withdraw_success},
                {name: 'add_new', path: '/en/add_new', component: add_new},
                {name: 'withdraw_history', path: '/en/withdraw-history', component: withdraw_history},
                {name: 'record', path: '/en/record', component: record},
                {name: 'project', path: '/en/my_project', component: project},
                {name: 'buy', path: '/en/buy/:itemId', component: buy},
                {name: 'pay', path: '/en/pay/:orderNum', component: pay},
                {
                    name: 'settings', path: '/en/settings', component: settings, children: [
                    {
                        name: 'password', path: '/en/settings/password', component: password, children: [
                        {name: 'forget_password', path: '/en/settings/password/forget', component: forget_password},
                        {name: 'change_password', path: '/en/settings/password/change', component: change_password},
                    ]
                    },
                    {name: 'settings_edit', path: '/en/settings/edit', component: settings_edit},
                    {name: 'add_address', path: '/en/settings/add', component: add_address},
                    {name: 'bind_tel', path: '/en/settings/bind', component: bind_tel},
                    {name: 'change_tel', path: '/en/settings/change', component: change_tel},
                ]
                },
                {
                    name: 'custom', path: '/en/custom', component: custom, children: [
                    {name: 'custom_home', path: '/en/custom/home', component: custom_home},
                ]
                },


                {name: 'page_404', path: '/en/page404', component: page_404},
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
