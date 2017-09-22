<template>
<div id="lingquan">
	<hand></hand>
	<ul>
		<li>
			<input type="radio">
			<div class="money">
				<p class="p1">¥10.00</p>
				<p class="p2">【手机券】</p>
			</div>
			<div class="limit">
				<p class="p1">299减10元券</p>
				<p class="p2">2017/09/19至2017/09/30</p>
			</div>
		</li>
		<li>
			<input type="radio">
			<div class="money">
				<p class="p1">¥40.00</p>
				<p class="p2">【手机券】</p>
			</div>
			<div class="limit">
				<p class="p1">满399减40元券</p>
				<p class="p2">2017/09/13至2017/09/30</p>
			</div>
		</li>
		<li>
			<input type="radio">
			<div class="money">
				<p class="p1">¥25.00</p>
				<p class="p2">【手机券】</p>
			</div>
			<div class="limit">
				<p class="p1">499减25元券</p>
				<p class="p2">2017/09/19至2017/09/30</p>
			</div>
		</li>
		<li>
			<input type="radio">
			<div class="money">
				<p class="p1">¥40.00</p>
				<p class="p2">【手机券】</p>
			</div>
			<div class="limit">
				<p class="p1">699减40元券</p>
				<p class="p2">2017/09/19至2017/09/30</p>
			</div>
		</li>
		<li>
			<input type="radio">
			<div class="money">
				<p class="p1">¥10.00</p>
				<p class="p2">【手机券】</p>
			</div>
			<div class="limit">
				<p class="p1">红洋酒专属满199减10元券</p>
				<p class="p2">2017/09/13至2017/09/30</p>
			</div>
		</li>
	</ul>
	<button>领取</button>
	
</div>
</template>

<script>
import hand from './module/home/header'

export default {

  name: 'lingquan',

  data () {
    return {

    };
  },
  components:{
  	hand
  }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#lingquan{
	width:100%;
	ul{
		width:px2rem(300px);
		margin:px2rem(20px) auto;
		list-style:none;
		padding-top:px2rem(20px);

		li{
			width: px2rem(300px);
			margin-top:px2rem(20px);
		    height: px2rem(80px);
		    padding: px2rem(7px) 0px;
		    background-color: #ffffff;
		    border: px2rem(1px) solid #DEDEDE;
		    display: block;
		    overflow: hidden;
		    position: relative;
		}
		input{
			float:left;
			margin: px2rem(35px) 0 0 px2rem(10px);
		}
		.money{
			float:left;
			border-right: px2rem(1px) solid #D3D3D3;
			width: px2rem(100px);
		    padding: 0 px2rem(10px);
		    height: px2rem(70px);
		    margin-top: px2rem(5px);
		    overflow: hidden;
		    color: #E74F41;
		    text-align: center;
			.p1{
				font-size: px2rem(24px);
			    margin-top: px2rem(5px);
			}
		}
		.limit{
			float:left;
			width: px2rem(150px);
		    height: px2rem(70px);
		    text-align: left;
		    margin-left:px2rem(5px);
		    color:#626365;
			.p1{
				font-size: px2rem(14px);
				margin-top:px2rem(15px);
			}
			.p2{
				font-size: px2rem(12px);
				margin-top:px2rem(5px);
			}
		}
	}
	button{
		width:70%;
		height:px2rem(35px);
		background: #DE4B45;
		border:none;
		margin:0 auto;
		display:block;
		border-radius: px2rem(5px);
		color:#fff;
		font-size: 100%;
	}
}
</style>