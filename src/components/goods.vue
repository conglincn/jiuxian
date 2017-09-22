<template>
	<div id="goods">
			<hand></hand>
		<swipe class="my-swipe" >
		  <swipe-item class="slide1">
		  	<img src="http://img06.jiuxian.com/2015/0810/a1b6186daf1643f9b958977e1a4ecbfe5.jpg" >
		  </swipe-item>
		  <swipe-item class="slide2">
		  	<img src="http://img06.jiuxian.com/2015/0810/6ca8bc2989bc4e4d8b5714026a1005c25.jpg" >
		  </swipe-item>
		  <swipe-item class="slide3">
		  	<img src="http://img08.jiuxian.com/2015/0810/6be754bbe2ad437aae12f3bd24467e2b5.jpg" >
		  </swipe-item> 
		</swipe>
		<div class="saopin">
			<p class="p1">{{this.$route.query.name}}</p>
			<p class="p2">{{this.data.advWords}}</p>
			<p class="p3"> <span class="pic">{{"￥"+data.price+".00"}}</span>
				<span class="pce">{{"酒仙价:"+data.jxPrice+".00"}}</span>
			</p>
		</div>
		<div class="jinbi"><span>金币</span>
			<span class="zs">赠送<span class="goldNum">{{data.goldCoinNum}}</span>
			<span>个金币</span></span>
			</div>
			<div class="num">
				<span>数量</span>
				<ul>
					<li @click="min">-</li>
					<li v-model="counter">{{counter}}</li>
					<li @click="add">+</li>
				</ul>
			</div>
			<ul class="foo">
				<li>品酒师</li>
				<li>收藏</li>
				<li>购物车</li>
				<li>加入购物车</li>
				<li>立即购买</li>
			</ul>	
</div>
</template>

<script>

import hand from './module/home/header'
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';

export default {

  name: 'goods',

  data () {
    return {
    	datalist:[],
    	data:"",
    	counter:1
      }

    
  },
  	components: {
    	hand,
	    'swipe': Swipe,
	    'swipe-item': SwipeItem,

	},
	methods:{
		add(){
			this.counter = parseInt(this.counter) + 1;
		},
		 min(){
            if(this.counter > 0){
                this.counter = parseInt(this.counter) - 1;
            }
        }
	},
	mounted(){
		// console.log(this.$route.params.name);
		// console.log(this.$route.query.pid,this.$route.query.name)
		axios.get(`/api/goods?id=${this.$route.query.pid}`).then(res=>{
			console.log(res.data)			
	  		this.data = res.data.productPromo
  	}),
		axios.get(`/api/homeAll`).then(res=>{
			// console.log(res.data)			
  	})

	}

};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#goods{
	width:100%;
	background:#f3f5f6;
	overflow: hidden;
	.my-swipe {
		  height: px2rem(320px);
		  width:100%;
		  margin-top:px2rem(40px);
		  color: #fff;
		  font-size: px2rem(30px);
		  text-align: center;
		  img{
		  	width:100%;
		  	height:100%;
		  }
		}
		.saopin{
			width:100%;
			height:auto;
			padding:px2rem(15px);
			background-color: #fff;
			box-sizing: border-box;
			.p1{
				font-size: px2rem(15px);
			    color: #252525;
			}
			.p2{
				font-size: px2rem(13px);
			    color: #fc5a5a;
			    margin-top:px2rem(10px);
			}
			.p3{
				.pic{
					font-size: px2rem(19px);
					color: #fc5a5a;
				}
				.pce{
					font-size: px2rem(12px);
				    color: #999;
				    text-decoration: line-through;
				}
			}
		}
		.jinbi{
			width:100%;
			height:px2rem(46px);
			background-color: #fff;
			margin-top:px2rem(20px);
			padding-left:px2rem(20px);
			line-height: px2rem(46px);
			.goldNum{
				color: #fc6a6a;

			}
			.zs{
				margin-left:px2rem(30px);

			}
		}
		.num{
			width:100%;
			height:px2rem(40px);
			background-color: #fff;
			margin-top:px2rem(20px);
			margin-bottom:px2rem(40px);
			padding-left: px2rem(10px);
			position:relative;
			line-height: px2rem(40px);
			span{
				display: inline-block;
				font-size: px2rem(16px);
			    color: #666;
			}
			ul{
				width:px2rem(75px);
				height:px2rem(22px);
				list-style:none;
				display: inline-block;
				border:px2rem(1px) solid #ccc;
				position:absolute;
				top:px2rem(8px);
				left:px2rem(85px);

				li{
					text-align: center;
					line-height: px2rem(22px);
				}
				li:nth-child(1){
					width:px2rem(22px);
					height:100%;
					float:left;
					border-right:px2rem(1px) solid #ccc;

				}
				li:nth-child(2){
					width:px2rem(29px);
					height:100%;
					float:left;

				}
				li:nth-child(3){
					width:px2rem(22px);
					height:100%;
					float:right;
					border-left:px2rem(1px) solid #ccc;

				}
			}
		}
		.foo{
			width:100%;
			height:px2rem(40px);
			position: fixed;
			background-color: #fafafa;
			bottom:0;
			list-style:none;
			li{
				height:100%;
				line-height: 100%;
				float:left;
				width:17%;
				line-height: px2rem(40px);
				text-align: center;

			}
			li:nth-child(4){
				width:24%;
				text-align: center;
				background-color: #fc5a5a;
				color:#fff;
			}
			li:nth-child(5){
				width:24%;
				text-align: center;
				border-right:px2rem(1px) solid #ccc;
				background-color: #3c3f51;
				color:#fff;
				float:right
			}

		}


}
</style>