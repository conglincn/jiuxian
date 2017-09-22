<template>
<div id="qingcang">
	<hand></hand>
	<div class="had">
	<img src="http://img08.jiuxian.com/bill/2017/0622/39b6faadd47446e59e7d8f2212dcb3bb.jpg" />
	<img src="http://img07.jiuxian.com/bill/2016/1105/26f2339484254907adfdafd313c0e676.jpg/" />

	</div>
	<div class="splist">
		<ul>
			<li v-for="data in qingcanglist">
				<img :src="data.goods_thumb">
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

  name: 'qingcang',

  data () {
    return {
    	qingcanglist:[]
    };
  },
  components:{
  	hand
  },
    mounted(){
  	axios.get("/api/qingcang").then(res=>{
  			console.log(res);
  		this.qingcanglist = res.data.goodsCate.list
  	})
}
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
#qingcang{
	width:100%;
	overflow:hidden;
	background: #eeeeee;
	.had{
		width:100%;
		margin-top:px2rem(40px);
		img{
			width:100%;
		}
	}

	.imgs{
		width:100%;
		img{
			width:100%;
			display: block;
		}
	}
	.splist{
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
					font-size:px2rem(12px);
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