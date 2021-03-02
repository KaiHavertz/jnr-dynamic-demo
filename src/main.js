import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//引入全局css 大的坑，main.js 引入 css 文件，不引入这个，会发现一切正常，但是页面没东西
import "@/styles/index.css";
Vue.config.productionTip = false;

//
import "tinymce/skins/ui/oxide/skin.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
