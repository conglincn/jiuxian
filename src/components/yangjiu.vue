<template>
<div id="yangjiu">

	<bbb></bbb>
	<div class="imm">
	<img src="../assets/img/i5.jpg" >
	<img src="../assets/img/i6.jpg" >

	</div>
	<div class="btn">
	<button>白兰地</button>
	<button>威士忌</button>
	<button>伏特加</button>
	<button>龙舌兰</button>
	<button>朗姆酒</button>
	<button>预调酒</button>
	<button>韩国烧酒</button>
	<button style="color:#de4943">查看全部</button>

	</div>
	<ul class="jingpin">
		<li class="l1"></li>
		<li class="l2">精品推荐</li>
		<li class="l3"></li>
	</ul>
	<div class="bai">
	<ul class="jiu"
				v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="10"
				infinite-scroll-immediate-check=false

	>
		<li v-for="data in bailist">
			<img :src="data.commonProductInfo.imgPath" />
			<span>
			<p class="p1">{{data.commonProductInfo.pname}}</p>
			<p class="p2">{{"￥"+data.commonProductInfo.jxPrice+".00"}}</p>
			</span>
		</li>
		<p class="sta">{{name}}</p>

	</ul>
		
	</div>
	
</div>
</template>

<script>
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue'
Vue.use(InfiniteScroll);


import bbb from './module/home/header'

export default {

  name: 'yangjiu',

  data () {
    return {
    	bailist:[],
    	current:1,
    	name:"正在加载中……"

    };
  },
  components:{
  	bbb,

  },
    methods:{
	  	loadMore(){
	  		console.log("加载新数据");
	  		this.loading = true;
	       this.current++;
	  		axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
	  			 this.bailist = [...this.bailist,...res.data.promoList]
	  			if(res.data.promoList.length < 10){
  				this.name = "亲~没有商品了"
  				return;
  			}

	  			   this.loading = false;


	  		})

	  	}
  },

  mounted(){
  	  	axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
  			
  		this.bailist = res.data.promoList;
  		console.log(this.bailist)
  	})
  }

};
</script>

<style lang="scss" scoped>

@function px2rem($px){
  @return $px/100px *1rem;
}
#yangjiu{
	input:focus{ outline:none; }

	.imm{
		width:100%;
		margin-top:px2rem(40px);
		img{
			width:50%;
			float:left;
		}
	}
	.btn{
		width: 100%;
	    margin-top: px2rem(10px);
	    button{
	    	width: 22%;
		    margin: 1% 0 0 1.33%;
		    height: px2rem(30px);
		    border:none;
		    background: transparent;
		    border:px2rem(1px) solid #ccc;
	    }
	}
	.jingpin{
		width:100%;
		height:px2rem(32px);
		margin-top:px2rem(20px);
		display: flex;
		list-style:none;
		justify-content:space-between;
		align-items:center;
		.l1{
			width:35%;
			height:px2rem(1px);
			background-color: #A2A2A2;
			margin-left:px2rem(10px);
		}
		.l3{
			width:35%;
			height:px2rem(1px);
			background-color: #A2A2A2;
			margin-right:px2rem(10px);
		}
	}
	.bai{
		width:98%;
		height:px2rem(3000px);
		margin:0 auto;
		.jiu{
			width:100%;
			list-style:none;
			li{
				width:100%;
				display:flex;
				padding:px2rem(20px) 0 0 0;
				height:px2rem(140px);
				box-sizing: border-box;
				border-bottom:px2rem(1px) solid #ccc;

			img{
				width:100px;
				height:100px;
				float:left;
				display:block;
			}
			span{
				float:right;
				margin-left:px2rem(10px);
				.p1{
					font-size:px2rem(12px);
					margin-top:px2rem(10px);
				}
				.p2{
					color: #fc5a5a;
					font-size:px2rem(20px);
					margin-top:px2rem(10px);
				}
			}
		}
	}
	}

}
</style>