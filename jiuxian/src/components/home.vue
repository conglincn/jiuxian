<template>
<div id="home">
	<div class="sousuo">
		
			<span class="logo"></span>
			<div class="search">
				<span class="fdj"></span>
				<input type="text" class="txt">
			</div>
			<input type="submit" value="搜索" class="sub">
		
	</div>
	<div class="slide">
		<swipe class="my-swipe" >
			  <swipe-item v-for="data in swipelist" key="data.id"><img :src="data" ></swipe-item>
		</swipe>
	</div>
	<nav>
		<ul>
			<li v-for="data in datalist"  @click="nava(data.href)">
			<img :src="data.src" ></li>
		</ul>
	</nav>
     <ul class="mingjiu">
	     <li v-for="data in mjlist"><img :src="data"  v-for="item of items"></li>
     </ul>

     <toutiao></toutiao>
     <miaopai></miaopai>  


     <footer>
     <ul>
     	<li @click="shouye"><i class="iconfont icon-shouye"></i>
     		<p>首页</p>
     	</li>
     	<li @click="fenlei"><i class="iconfont icon-leimupinleifenleileibie"></i>
     	<p>分类</p>
     	</li>
     	<li><img src="../assets/img/img-1.png" ></li>
     	<li><i class="iconfont icon-gouwuche"></i>
     	<p>购物车</p>
     	</li>
     	<li @click="user"><i class="iconfont icon-wode"></i>
     		<p>我的酒仙</p>
     	</li>
     </ul>
     </footer>
</div>
</template>

<script>
import toutiao from './module/home/toutiao'
import miaopai from './module/home/miaopai'

import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import '@/assets/iconfont/iconfont.css'

export default {

  name: 'home',

  data () {
    return {
    	datalist:[  {href:"/baijiu",src:"./static/img/nav-1.jpg"},
			    	{href:"/putaojiu",src:"./static/img/nav-2.jpg"},
			    	{href:"/yangjiu",src:"./static/img/nav-3.jpg"},
			    	{href:"/jumingjiu",src:"./static/img/nav-4.jpg"},
			    	{href:"/jingpin",src:"./static/img/nav-5.jpg"},
			    	{href:"/club",src:"./static/img/nav-6.jpg"},
			    	{href:"/xijiu",src:"./static/img/nav-7.jpg"},
			    	{href:"/lingquan",src:"./static/img/nav-8.jpg"},
			    	{href:"/qingcang",src:"./static/img/nav-9.jpg"},
			    	{href:"/laojiu",src:"./static/img/nav-10.jpg"}],

		swipelist:[ "./static/img/slide-1.jpg",
					"./static/img/slide-2.jpg",
					"./static/img/slide-3.jpg",
					"./static/img/slide-4.jpg",
					"./static/img/slide-5.jpg",
					"./static/img/slide-6.jpg",
					"./static/img/slide-7.jpg"],

		mjlist: ["./static/img/img-1.jpg",
				"./static/img/img-2.jpg",
				"./static/img/img-3.jpg"],

		items: ["nava"]
    }
  },
    components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem,
    toutiao,
    miaopai
  },
  methods: {
  	nava(href){
	   	this.$router.push(href)		
  	},
  	shouye(){
  		this.$router.push('/home')
  	},
  	fenlei(){
  		this.$router.push('/fenlei')
  	},
  	user(){
  		this.$router.push('/user')
  	}
  }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

input:focus{ outline:none; }
#home{
	html{
		height:10000px;
	}

	width:100%;
	.sousuo{
		width:100%;
		height:px2rem(39px);
		position:fixed;
		z-index:99;
		display:flex;
		justify-content:space-around;
		padding-left:px2rem(5px);
		align-items:center;	
		background: #e5383b;
			.logo{
				width:px2rem(57px);
				height:px2rem(27px);
				display: inline-block;
				background-position: 0 0;
				background: url("../assets/img/download.png") no-repeat 0 0;
				background-size: px2rem(200px) px2rem(73px);
			}
			.search{
				height:px2rem(27px);
				width:65%;
				border-radius: px2rem(3px);
				position:relative;
				background-color: #fff;
				margin-left:px2rem(5px);


				.fdj{
					width:px2rem(35px);
					height:px2rem(30px);
					float:left;
					display: inline-block;
				    position: absolute;
					background: url("../assets/img/download.png") no-repeat px2rem(-88px) px2rem(3px);
					

				}
				.txt{
					float:right;
					padding-left:15px;
					width:88%;
					height:100%;
					border-style:none;
					border-radius: px2rem(3px);
					box-sizing: border-box;

				}
			}
				
			.sub{
				height:px2rem(27px);
				width: px2rem(45px);
				display: block;
				text-align: center;
			    font-size: px2rem(12px);
			    font-family: "黑体";
				margin-right: px2rem(20px);
				border:none;
				color:#fff;
				background: transparent;
				background-color: none;
			}
		}
	.slide{
		width:100%;
		.my-swipe {
			width:100%;
			  height: px2rem(200px);
			  color: #fff;
			  background: pink;
			  img{
			  	width:100%;
			  	height:100%;
			  }
			}


	}
	// ---------------导航---------------------
	nav{
		width: 100%;
		margin-top:px2rem(2px);
		ul{
			display:flex;
			flex-wrap:wrap;
			li{
				width: 20%;
			    display: block;
			    font-size: 0;

			    img{
			    	width:100%;
			    }
			}
		}
	}
	.mingjiu{
		font-size:0;
		width:100%;
		overflow: hidden;
		background-color: red;
		li{
			list-style:none;
		}
		
			li:nth-child(1){
				width:100%;
				font-size:0;
				border:none;
				img{
					width:100%;
				}
			}
			li:nth-child(2){
				width:50%;
				font-size:0;
				float:left;
				border:none;
				img{
					width:100%;
				}
			}		
			li:nth-child(3){
				width:50%;
				float:right;
				font-size:0;
				border:none;
				img{
					width:100%;
				}
			}		

	}

//--------------footer---------------------------
	footer{
		width:100%;
		height:px2rem(45px);
		background:#f1f1f1;
		position:fixed;
		bottom:0;
		flex:1;
		ul{
			width:100%;
			height:100%;
			display:flex;
			justify-content:space-around;
			list-style: none;
			li:nth-child(1){
				color:red;
			}
			li{
				text-align: center;
				img{
					width:px2rem(42px);
					height:px2rem(42px);
				}
				p{
					font-size:px2rem(13px);
				}
			}
		}
	}
}
</style>