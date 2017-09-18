<template>
<div id="fenlei">
	<hand></hand>

	<div class="top">
		<div class="input-top">
			<input type="text" class="tex" placeholder="飞天茅台">
			<button class="btn">搜索</button>
		</div>
	</div>
	<ul class="jiu">
		<li ><i class="iconfont icon-jiubei"></i><p>白酒</p></li>
		<li ><i class="iconfont icon-jiu"></i><p>葡萄酒</p></li>
		<li ><i class="iconfont icon-jiuba"></i><p>洋酒</p></li>
		<li ><i class="iconfont icon-xiangzi"></i><p>整箱购</p></li>
		<li ><i class="iconfont icon-wine"></i><p>老酒</p></li>
		<li ><i class="iconfont icon-xiangzi1"></i><p>清仓特卖</p></li>
		<li ><i class="iconfont icon-jijiuziyouxing"></i><p>海外直采</p></li>
		<li ><i class="iconfont icon-jiutan"></i><p>精美大坛</p></li>
		<li ><i class="iconfont icon-hezixiangzi"></i><p>红酒整箱</p></li>
		<li ><i class="iconfont icon-paiming1"></i><p>值得买</p></li>
		<li ><i class="iconfont icon-xiaoliang"></i><p>销量排行</p></li>
		<li ><i class="iconfont icon-zhaojiudian"></i><p>礼尚往来</p></li>
	</ul>
	</div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
import hand from './module/home/header'

export default {

  name: 'fenlei',

  data () {
    return {
    	

    }
  },
  components: {
  	hand
  },
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#fenlei{

	.top{
		width:100%;
		height: px2rem(50px);
	    background-color: #e2e2e2;
	    .input-top{
	    	width:px2rem(320px);
	    	height:100%;
	    	margin:0 auto;
	    	line-height: px2rem(50px);
	    	.tex{
	    		height: px2rem(30px);
	    		border:none;
	    		width:px2rem(250px);
	    		box-sizing: border-box;
	    		padding-left:px2rem(15px);
	    	}
	    	.btn{
	    		width: px2rem(65px);
			    height: px2rem(30px);
			    border:none;
			    background-color: #de4943;
			    color: #fff;
	    	}

	    }
	}
	.jiu{
		width:100%;
		display:flex;
		list-style:none;
		justify-content: flex-start;
		flex-wrap:wrap;
		li:nth-child(1){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
			margin-left: px2rem(5px);
		}
		li:nth-child(2){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
		}
		li:nth-child(3){
			border-bottom: px2rem(1px) solid #f6f6f6;

		}
		li:nth-child(4){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
			margin-left: px2rem(5px);

		}
		li:nth-child(5){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
		}
		li:nth-child(6){
			border-bottom: px2rem(1px) solid #f6f6f6;
		}
		li:nth-child(7){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
			margin-left: px2rem(5px);
		}
		li:nth-child(8){
			border-bottom: px2rem(1px) solid #f6f6f6;
			border-right: px2rem(1px) solid #f6f6f6;
		}
		li:nth-child(9){
			border-bottom: px2rem(1px) solid #f6f6f6;
		}
		li:nth-child(10){
			border-right: px2rem(1px) solid #f6f6f6;
			margin-left: px2rem(5px);

		}
		li:nth-child(11){
			border-right: px2rem(1px) solid #f6f6f6;

		}



		li{
			width:32%;
			display: block;
			color: #000;
			font-size: px2rem(14px);
			height:px2rem(81px);
			text-align: center;
			i{	display:inline-block;
				font-size: px2rem(32px);
				padding-top:px2rem(10px)
			
			}
			p{
				margin-top:px2rem(10px);
			}

		}

	}
}
</style>