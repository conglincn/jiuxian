<template>
<div id="laojiu">
	<hand></hand>
	<div class="has">
	<img src="http://img10.jiuxian.com/bill/2017/0320/322d349149dc4c2cbe76e90a283fa212.jpg" />
	<img src="http://img10.jiuxian.com/bill/2017/0315/0badb06c785049af96b9327e9ed8f069.jpg" />

	</div>

		<div class="ss">
			<ul>
				<li v-for="data in laojiulist">
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

  name: 'laojiu',

  data () {
    return {
    	laojiulist:[]
    };
  },
  components:{
  	hand
  },
    mounted(){
  	axios.get("/api/xijiu1All").then(res=>{
  			console.log(res);
  		this.laojiulist = res.data.goodsCate.list
  	})
}
};
</script>

<style lang="scss" scoped>
#laojiu{
	overflow: hidden;
	background-color: #eeeeee;

	.has{
		width:100%;
		margin-top:40px;
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
				height: 280px;
				background-color: #fff;
				margin-top:10px;
				img{
					width:100%;
				}
				.p1{
					font-size:12px;
					margin:0 auto;
					width:97%;
					height:35px;
					overflow:hidden;
					text-align: center;
					border-bottom: 1px solid #ccc;
				}
				.p2{
					font-size:23px;
					color:red;
					display:flex;
					justify-content: space-between;
					width:95%;
					margin:20px auto;
					button{
						border:none;
						color:#fff;
						background-color: red;
						width:70px;
						height:27px;
						border-radius: 4px;
					}
				}
			}
		}
	}
}
</style>