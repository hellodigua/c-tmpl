import Vue from 'vue'
import App from './App.vue'
{{#element-ui}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
{{/element-ui}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App)
})
