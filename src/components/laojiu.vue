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
@function px2rem($px){
  @return $px/100px *1rem;
}

#laojiu{
	overflow: hidden;
	background-color: #eeeeee;

	.has{
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