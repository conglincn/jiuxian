import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		headername:"选酒"
	},
	mutations:{
		changetitle:(state,payload)=>{
			console.log(payload);
			var title=["白酒","葡萄酒","洋酒","聚茗酒","精品酒铺","CLUB会员","精选喜酒","领券","清仓","老酒"]
			state.headername = title[payload];
		}
	}
})






export default store;