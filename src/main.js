import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import vuedraggable from 'vuedraggable';
import store from '@/store'


Vue.use(Antd);
Vue.use(vuedraggable);
Vue.config.productionTip = false
Vue.config.devtools = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
