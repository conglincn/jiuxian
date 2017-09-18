<template>
<div id="baijiu">

	<bbb></bbb>
	<div class="imm">
	<img src="../assets/img/i5.jpg" >
	<img src="../assets/img/i6.jpg" >

	</div>
	<div class="btn">
	<button>茅台</button>
	<button>五粮液</button>
	<button>汾酒</button>
	<button>泸州老窖</button>
	<button>酱香</button>
	<button>清香</button>
	<button>浓香</button>
	<button style="color:#de4943">查看全部</button>

	</div>
	<ul class="jingpin">
		<li class="l1"></li>
		<li class="l2">精品推荐</li>
		<li class="l3"></li>
	</ul>
	<div>
		<ul>
			<li v-for="data in bailist">
				<!-- <img :src="data." > -->
			</li>
		</ul>
		
	</div>
	
</div>
</template>

<script>
import axios from 'axios'

import bbb from './module/home/header'
export default {

  name: 'baijiu',

  data () {
    return {
    	bailist:[]
    };
  },
  components:{
  	bbb,

  },
  mounted(){
  	axios.get("/api/baijiuAll").then(res=>{
  			console.log(res);
  		// this.bailist = res.data.hashMapList
  	})
  }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
#baijiu{
	input:focus{ outline:none; }

	.imm{
		width:100%;
		margin-top:20px;
		img{
			width:50%;
			float:left;
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

}
</style>