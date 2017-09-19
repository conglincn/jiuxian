<template>
	<div id="miaopai">
	<div class="spikeTit">
	<h3>掌上秒拍</h3>
		
	</div>
	<div class="ace">
		
	<ul class="mmp">
		<li v-for="data in datalist">
		<img :src="data.proImg" >
		<p>{{data.proName}}</p>
		<p class="php">{{"￥"+data.jxPrice+".00"}}</p>
		</li>
	</ul>
		</div>
		<div class="iiii">
		<ul >
			<li><img src="../../../assets/img/i1.jpg"></li>
			<li><img src="../../../assets/img/i2.jpg"></li>
			<li><img src="../../../assets/img/i3.jpg"></li>
			<li><img src="../../../assets/img/i4.jpg"></li>
		</ul>
			
		</div>
		<div >
			<ul class="allsp"  
				v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="10"
				  infinite-scroll-immediate-check=false
				  >
				<li v-for="all in alllist">
				<img :src="all.commonProductInfo.imgPath" >
				<p class="name">{{all.commonProductInfo.pname}}</p>
				<p class="age">{{"￥"+all.commonProductInfo.actPrice+".00"}}</p>
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

export default {

  name: 'miaopai',

  data () {
    return {
    	datalist:[],
    	alllist:[],
    	loading:false,
    	current:1
    }
  },
  methods:{
  	loadMore(){
  		console.log("加载新数据");
  		this.loading = true;
       this.current++;
  		axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
  			 this.alllist = [...this.alllist,...res.data.promoList]
  			   this.loading = false;


  		})

  	}
  },
  mounted() {
  	  	axios.get("/api/homePage").then(res=>{
  			
  		this.datalist = res.data.killProList
  	}),
  	  	axios.get(`/api/homeAll?page=${this.current}`).then(res=>{
  			
  		this.alllist = res.data.promoList;
  		console.log(this.alllist)
  	})

}
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#miaopai{
	width:100%;
	overflow:hidden;
	margin-bottom:50px;
	.ace{
		width:100%;
		overflow-x:scroll;
		border-bottom: px2rem(1px) solid #ccc;
	.mmp{
		width:px2rem(1045px);
		height:px2rem(165px);
		padding-left: px2rem(10px);
		position: relative;
		padding-left: calc(100vw - 100%);

		li{
			width:100px;
			height:100%;
			float:left;
    		overflow: hidden;

			img{
				width:px2rem(96px);
				height:px2rem(96px);
			}
			p{
				font-size: px2rem(12px);
				height:px2rem(32px);
				line-height: px2rem(16px);
				overflow: hidden;

			}
			.php{
				color: #fc5a5a;
			    font-size: px2rem(14px);
			    line-height: px2rem(14px);
			    margin-left:px2rem(5px);
			}
		}
	}
	}
	.iiii{
		width:100%;
		overflow:hidden;
		img{
			width:100%;

		}
	}
	.allsp{
		width:100%;
		background-color: #f3f5f6;
		list-style:none;
		margin-top:px2rem(10px);
		display: flex;
		flex-wrap:wrap;
		justify-content:space-between;

		li{
			width:49.5%;
			background-color: #fff;
			margin-top:px2rem(5px);


			img{
				width:100%;
				text-align: center;
			}
		}
		.name{
			height: px2rem(32px);
		    line-height: px2rem(16px);
		    overflow: hidden;
		    color: #252525;
		    font-size: px2rem(12px);
		}
		.age{
			font-size: px2rem(14px);
		    color: #fc5a5a;
		    font-weight: normal;
		}
	}
}


</style>