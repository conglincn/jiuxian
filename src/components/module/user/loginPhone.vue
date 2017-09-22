<template>
<div id="loginphone">
	<div class="top">
	<span class="tos"></span>
	<input type="text" class="user" placeholder="请输入手机号码">
	</div>

	<div class="num">
		<input type="text" placeholder="验证码" class="number">
		<img src="../../../assets/img/captchaimg.jpg" alt="验证码">
		<span>换一张</span>
	</div>

	<div class="bto">
	<input type="text" class="yanzhengma" placeholder="请输入校验码">
	<button>获取校验码</button>
	</div>

	<div class="btn">
		<button>登录</button>
		
	</div>


	</div>
</template>

<script>
export default {

  name: 'loginPhone',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#loginphone{
	width:85%;
	margin:0 auto;
	input:focus{ outline:none; }

	.top{
		width:100%;
		height:px2rem(40px);
		margin-top:px2rem(20px);
		border:px2rem(1px) solid #ccc;
		border-radius: px2rem(3px);

		.tos{
			width:10%;
			height:100%;
			float:left;
			background: url("../../../assets/img/loginIcon.png") no-repeat;
			background-position: px2rem(-130px) px2rem(-23px);

		}

		.user{
			width:90%;
			float:right;
			height:100%;
			box-sizing: border-box;
			font-size:100%;
			border:none;
		}

	}	

	.num{
		width:100%;
		height:px2rem(42px);
		margin-top:px2rem(40px);
		line-height: px2rem(42px);

		.number{
			width:30%;
			height:px2rem(40px);
			font-size: 100%;
			border:none;
			border:px2rem(1px) solid #ccc;
			border-radius: px2rem(3px);
			padding-left:px2rem(10px);
			box-sizing: border-box;
			display: inline-block;
			float:left;


		}
		img{
			margin-left:px2rem(60px);
			float:left;
		}
		span{
			float:right;
			color:#626365
		}

	}
	.bto{
		width:100%;
		height:px2rem(40px);
		margin-top:px2rem(40px);
		input{
			padding-left:px2rem(10px);
			width:40%;
			height:100%;
			float:left;
			border:none;
			border:px2rem(1px) solid #ccc;
			border-radius: px2rem(3px);
			font-size: 100%;
			box-sizing: border-box;
		}
		button{
			float:right;
			width:px2rem(100px);
			height:px2rem(40px);
			border:none;
			background: #DE4B45;
			border-radius: px2rem(5px);
			color:#fff;
			font-size:100%;


		}
	}
	.btn{
		width:85%;
		height:px2rem(34px);
		margin:px2rem(40px) auto;

		button{
			width:100%;
			height:100%;
			background: #DE4B45;
			border:none;
			border-radius: px2rem(5px);
			color:#fff;
			font-size:100%;
		}
	}


}
</style>