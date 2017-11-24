// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import $ from 'jquery'
import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
import './assets/css/common.css'

import VueResource from 'vue-resource'

Vue.use(VueResource);

import moment_vue from 'moment'
// Vue.use(moment)
// 添加自定义的过滤器
Vue.filter('moment', function (value, formatString) {
    value = value * 1000;
    formatString = formatString || 'YYYY.MM.DD';
    return moment_vue(value).format(formatString);
});
Vue.filter('moment_detail', function (value, formatString) {
    value = value * 1000;
    formatString = formatString || 'YYYY.MM';
    return moment_vue(value).format(formatString);
});

Vue.filter('_moment', function (value, formatString) {
    value = value * 1000;
    formatString = formatString || 'YYYY-MM-DD';
    return moment_vue(value).format(formatString);
});

Vue.filter('moment_wallet', function (value, formatString) {
    value = value * 1000;
    formatString = formatString || 'YYYY-MM-DD hh:mm:ss';
    return moment_vue(value).format(formatString);
});
Vue.filter('moment_project', function (value, formatString) {
    value = value * 1000;
    formatString = formatString || 'YYYY.MM.DD hh:mm:ss';
    return moment_vue(value).format(formatString);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
}).$mount('#app');

