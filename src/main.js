import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')