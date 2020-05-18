import Vue from 'vue'
import axios from 'axios'
import 'bootstrap'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
axios.defaults.withCredentials = true; //解決跨域問題
Vue.use(VueAxios, axios);

new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
    //全局首位
router.beforeEach((to, from, next) => {
    console.log('to', to, 'from', from, 'next', next);
    if (to.meta.requiresAuth) {
        // console.log('這裡需要驗證');

        const api = `https://vue-course-api.hexschool.io/api/user/check`;

        axios.post(api).then(res => {
            console.log(res.data);
            console.log('這裡需要驗證');
            if (res.data.success) {
                next(); //如果正確
            } else {
                next({
                    path: '/login'
                })
            }
        });

    } else {
        next();
    }

    // ...
});