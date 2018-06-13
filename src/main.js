// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.old'
import router from './router/index'
// import $ from 'jquery'

import VueResource from 'vue-resource'

Vue.use(VueResource);

// Vue.use(moment)
// 添加自定义的过滤器


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
}).$mount('#app');

