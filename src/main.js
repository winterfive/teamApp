import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
Vue.use(Vuetify);

new Vue({
  render: h => h(App)
}).$mount("#app");
