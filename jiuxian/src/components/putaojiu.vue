<template>
<div id="putaojiu">
	<hand></hand>
	<div class="imm">
	<img src="../assets/img/i7.jpg" class="i1">
	<img src="../assets/img/i8.jpg" >
	<img src="../assets/img/i9.jpg" >

	</div>
	<div class="btn">
	<button>法国</button>
	<button>澳大利亚</button>
	<button>西班牙</button>
	<button>智利</button>
	<button>拉菲</button>
	<button>奔富</button>
	<button>张裕</button>
	<button style="color:#de4943">查看全部</button>

	</div>
	<ul class="jingpin">
		<li class="l1"></li>
		<li class="l2">精品推荐</li>
		<li class="l3"></li>
	</ul>
	<div class="putao">
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
	</ul>
		
	</div>
	
</div>
</template>

<script>
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue'
Vue.use(InfiniteScroll);


import hand from './module/home/header'
export default {

  name: 'putaojiu',

  data () {
    return {
    	bailist:[],
    	loading:false,
    	current:1

    };
  },
  components:{
  	hand,

  },
    methods:{
	  	loadMore(){
	  		console.log("加载新数据");
	  		this.loading = true;
	       this.current++;
	  		axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
	  			 this.bailist = [...this.bailist,...res.data.promoList]
	  			   this.loading = false;


	  		})

	  	}
  },

  mounted(){
  	  	axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
  			
  		this.bailist = res.data.promoList;
  		console.log(this.bailist)
  	})
  }};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
#putaojiu{
	input:focus{ outline:none; }

	.imm{
		width:100%;
		margin-top:40px;
		height:177px;
		.i1{
			height:100%;
		}
		img{
			width:50%;
			float:left;
			height:50%;
		}
	}
	.btn{
		width: 100%;
	    margin-top: 10px;
	    button{
	    	width: 22%;
		    margin: 1% 0 0 1.33%;
		    height: 30px;
		    border:none;
		    background: transparent;
		    border:1px solid #ccc;
	    }
	}
	.jingpin{
		width:100%;
		height:32px;
		margin-top:20px;
		display: flex;
		list-style:none;
		justify-content:space-between;
		align-items:center;
		.l1{
			width:35%;
			height:1px;
			background-color: #A2A2A2;
			margin-left:10px;
		}
		.l3{
			width:35%;
			height:1px;
			background-color: #A2A2A2;
			margin-right:10px;
		}
	}
	.putao{
		width:98%;
		height:3000px;
		margin:0 auto;
		.jiu{
			width:100%;
			list-style:none;
			li{
				width:100%;
				display:flex;
				padding:20px 0 0 0;
				height:140px;
				box-sizing: border-box;
				border-bottom:1px solid #ccc;
				img{
				width:100px;
				height:100px;
				float:left;
				display:block;
				}
			span{
				float:right;
				margin-left:10px;
				.p1{
					font-size:12px;
					margin-top:10px;
				}
				.p2{
					color: #fc5a5a;
					font-size:20px;
					margin-top:10px;
				}
			}
		}
	}

	}

}
</style>