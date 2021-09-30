// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.scss'

Vue.config.productionTip = false

const vm = new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})