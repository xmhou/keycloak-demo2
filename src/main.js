import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import keycloak from '@dsb-norge/vue-keycloak-js'

Vue.use(keycloak, {
  init: {
    onLoad: 'login-required'
  },
  config: {
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'service-nodejs'
  },
  onReady: (keycloak) => {
    keycloak.loadUserProfile().success((data) => {
      // requestAuth;
      console.log(data);
    });
  }
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
