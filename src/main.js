import Vue from 'vue'
import App from './App'
import store from './store'
import '../static/style/weui.css'
import './iconfont/iconfont.css'


Vue.config.productionTip = false
App.mpType = 'app'



const app = new Vue({
    store,
    ...App
})
app.$mount()
