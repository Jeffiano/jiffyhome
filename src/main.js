import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Jiffy from './components/Jiffy'
import Lily from './components/Lily'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes:[
	{path:"/",component:Jiffy},
	{path:"/helloworld",component:HelloWorld},
	{path:"/jiffy",component:Jiffy},
	{path:"/lily",component:Lily},
	],
	mode:"history"
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
