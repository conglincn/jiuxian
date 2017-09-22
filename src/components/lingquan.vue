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

#lingquan{
	width:100%;
	ul{
		width:300px;
		margin:20px auto;
		list-style:none;
		padding-top:20px;

		li{
			width: 300px;
			margin-top:20px;
		    height: 80px;
		    padding: 7px 0px;
		    background-color: #ffffff;
		    border: 1px solid #DEDEDE;
		    display: block;
		    overflow: hidden;
		    position: relative;
		}
		input{
			float:left;
			margin: 35px 0 0 10px;
		}
		.money{
			float:left;
			border-right: 1px solid #D3D3D3;
			width: 100px;
		    padding: 0 10px;
		    height: 70px;
		    margin-top: 5px;
		    overflow: hidden;
		    color: #E74F41;
		    text-align: center;
			.p1{
				font-size: 24px;
			    margin-top: 5px;
			}
		}
		.limit{
			float:left;
			width: 150px;
		    height: 70px;
		    text-align: left;
		    margin-left:5px;
		    color:#626365;
			.p1{
				font-size: 14px;
				margin-top:15px;
			}
			.p2{
				font-size: 12px;
				margin-top:5px;
			}
		}
	}
	button{
		width:70%;
		height:35px;
		background: #DE4B45;
		border:none;
		margin:0 auto;
		display:block;
		border-radius: 5px;
		color:#fff;
		font-size: 100%;
	}
}
</style>