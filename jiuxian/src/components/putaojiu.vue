<template>
<div id="putaojiu">
	<bbb></bbb>
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
	<div>
		<ul>
			<!-- <li v-for="data in bailist"> -->
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

  name: 'putaojiu',

  data () {
    return {
    	bailist:[]
    };
  },
  components:{
  	bbb,

  },
  mounted(){
  	axios.get("/api/putaojiu").then(res=>{
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
#putaojiu{
	input:focus{ outline:none; }

	.imm{
		width:100%;
		margin-top:20px;
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

}
</style>