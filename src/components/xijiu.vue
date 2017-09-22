<template>
<div id="xijiu">
	<hand></hand>
	<div class="imgs">
		<img src="http://img06.jiuxian.com/bill/2017/0912/000585e64c8b4ff9bdad80e5bd08fa18.jpg" >
		<img src="http://img10.jiuxian.com/bill/2017/0912/c053ef62528b4665bde7fa937a4554a2.jpg" >
		<img src="http://img08.jiuxian.com/bill/2017/0912/28d826931a144a26b4a74feaef47bd69.jpg" >
		<img src="http://img10.jiuxian.com/bill/2017/0912/209a659fb7e648aeaccb95b801027917.jpg" >
		<img src="http://img08.jiuxian.com/bill/2017/0912/99bce32358ed47a592ef477c776c04f5.jpg" >
		<img src="http://img07.jiuxian.com/bill/2017/0912/41cf88fdc56d4607b2f3d41698a63284.jpg" >
	</div>
	<div class="ss">
		<ul>
			<li v-for="data in xijiulist">
				<img :src="data.goods_thumb" >
				<p class="p1">{{data.goods_name}}</p>
				<p class="p2">{{"￥"+data.cur_price}}
				<button>点击购买</button>

				</p>
			</li>
		</ul>
		
	</div>
	
</div>
</template>

<script>
import axios from 'axios'

import hand from './module/home/header'

export default {

  name: 'xijiu',

  data () {
    return {
    	xijiulist:[]
    };
  },
  components:{
  	hand
  },
    mounted(){
  	axios.get("/api/xijiu1All").then(res=>{
  			console.log(res);
  		this.xijiulist = res.data.goodsCate.list
  	})
}
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#xijiu{
	overflow: hidden;
	background-color: #c8e5f7;


	.imgs{
		width:100%;
		margin-top:px2rem(40px);
		img{
			width:100%;
			display: block;
		}
	}
	.ss{
		width:100%;
		ul{
			width:98%;
			margin:0 auto;
			list-style:none;
			display:flex;
			justify-content:space-around;
			flex-wrap:wrap;
			li{
				width:48%;
				height: px2rem(280px);
				background-color: #fff;
				margin-top:px2rem(10px);
				img{
					width:100%;
				}
				.p1{
					font-size:12px;
					margin:0 auto;
					width:97%;
					height:px2rem(35px);
					overflow:hidden;
					text-align: center;
					border-bottom: px2rem(1px) solid #ccc;
				}
				.p2{
					font-size:px2rem(23px);
					color:red;
					display:flex;
					justify-content: space-between;
					width:95%;
					margin:px2rem(20px) auto;
					button{
						border:none;
						color:#fff;
						background-color: red;
						width:px2rem(70px);
						height:px2rem(27px);
						border-radius: px2rem(4px);
					}
				}
			}
		}
	}
}
</style>