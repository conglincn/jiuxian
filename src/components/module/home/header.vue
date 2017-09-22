<template>
<div id="hand">
	<div class="header">
		<span class="hand-img" @click="back"><img src="../../../assets/img/fanhui.jpg" ></span>
		<span class="hand-text">{{headername}}</span>
		<span class="hand-i" @click="handle"><i class="iconfont icon-fenlei1"></i></span>
		
	</div>
	<ul class="non" v-show="isShow">
		<router-link to="/home" tag="li"><i class="iconfont icon-shouye"></i>
			<p>首页</p>
		</router-link>
		<router-link to="/fenlei" tag="li"><i class="iconfont icon-sousuo"></i>
			<p>搜索</p>
		</router-link>
		<router-link to="/fenlei" tag="li"><i class="iconfont icon-gouwuche"></i>
			<p>购物车</p>
		</router-link>
		<router-link to="/user" tag="li">
		<i class="iconfont icon-zhanghao"></i>
			<p>我的酒仙</p>
		</router-link>
	</ul>
	
</div>

</template>

<script>

import {mapState} from "vuex";
import '@/assets/iconfont/iconfont.css'

export default {

  name: 'header',

  data () {
    return {

    	isShow:false
    }
  },

  methods: {
  	back(){
  		this.$router.go(-1);
  	},
  	handle(){
  		this.isShow = !this.isShow
  	},

  },

  computed:{
    ...mapState(["headername"])
  }

};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
#hand{
	.header{
		width:100%;
		height: px2rem(40px);
		background-color: #de4943;
		color: #fff;
		position: fixed;
		top:0;
		display: flex;
		justify-content:space-between;
		align-items:center;
		font-size: px2rem(16px);
			.hand-img{
				margin-left: px2rem(15px);
			}

			.hand-i{
				margin-right:px2rem(15px);
			}
		}
		.non{
			width:100%;
			height:45px;
			position:absolute;
			top:40px;
			z-index: 99;
			background-color: #efefef;
		    color: #848d96;
		    list-style:none;
		    border-bottom: 1px solid #ccc;
		    position:fixed;
		    display: flex;
			justify-content:space-around;
			li{
				text-align: center;
				p{
					font-size:12px;
				}
			}

		}
}
</style>