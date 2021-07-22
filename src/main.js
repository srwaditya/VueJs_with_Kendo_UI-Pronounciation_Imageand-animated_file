import Vue from 'vue'
import App from './App.vue'

import { Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
 
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

Vue.config.productionTip = false
Vue.use (ButtonsInstaller)
/* eslint-disable no-new */ 
new Vue({
el:'#app',
template:'<App>',
components:{
  App,
  Button
}
})

