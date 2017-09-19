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
#qingcang{
	width:100%;
	overflow:hidden;
	background: #eeeeee;
	.had{
		width:100%;
		margin-top:40px;
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