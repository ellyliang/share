
import Vue from 'vue';
import App from '@/App.vue';
console.log('app', App);
import router from '@/router';

console.log('router', router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
