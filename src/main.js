// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios
import axios from "axios";
Vue.prototype.axios = axios
axios.defaults.baseURL = '/api/' 


//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


//制作一个过滤器，用来制作图片的大小的

Vue.filter("setWh",(url,arg)=>{

  return url.replace(/w\.h/,arg);

});

// import vueResource from "vue-resource";
// Vue.use(vueResource);
// Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false

//导入element-ui的组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
