// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'Vuex';
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Vuex)
let store=new Vuex.Store({
	state:{
		siderList:[]
	},
	getters:{
        getData(state){
        	return state.siderList;
        }
	},
	mutations:{
		updataSider(state,data){
			state.siderList=data;
		}
	},
	actions:{
        updata(context,data){
        	context.commit('updataSider',data);
        }
	}
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
