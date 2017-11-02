// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import $ from 'jquery'
import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
import './assets/css/common.css'

import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
});
