<template>
<div id="loginuser">
	<div class="top">
	<span class="tos"></span>
	<input type="text" class="user" placeholder="请输入手机号" v-model="phone" maxlength="11">
	</div>
	<div class="pass">
	<span class="tos"></span>
	<input type="text" class="password" placeholder="密码" v-model="password">
	</div>
	<div class="num">
		<input type="text" placeholder="验证码" class="number">
		<img src="../../../assets/img/captchaimg.jpg" alt="验证码">
		<span>换一张</span>
	</div>
	<div class="btn">
		<button @click="log">登录</button>
		
	</div>
	<div class="zhaohui">
		<span class="s1" @click="regis" >免费注册</span>
		<span class="s2">找回密码</span>
	</div>
	<div class="qq">
		<div></div>
		<span>合作伙伴登录</span>
		<div></div>
	</div>
	<ul class="zhifubao">
		<li></li>
		<li></li>
	</ul>
	
</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'loginUser',

  data () {
    return {
    	phone:"",
    	password:"",
    };
  },
  methods: {
  	regis(title){
  		this.$router.push('/register')

  	},
  	log(){
  		console.log(this.phone)
  		console.log(this.password)

    	axios.post("/api/login","phone="+this.phone+"&password="+this.password)
		.then(res=>{
			console.log(res.data)
			if(res.data){
				localStorage.setItem("name",this.phone)
				alert("登录成功！");
				this.$router.push('/');
			}else{                      
				alert("手机号或密码错误")
			}
		})
	
	}
  	



  	}
  }

</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#loginuser{
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
			background-position: px2rem(6px) px2rem(-24px);

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
	.pass{
		width:100%;
		height:px2rem(40px);
		margin-top:px2rem(40px);
		border:px2rem(1px) solid #ccc;
		border-radius: px2rem(3px);

		.tos{
			width:10%;
			height:100%;
			float:left;
			background: url("../../../assets/img/loginIcon.png") no-repeat;
			background-position: px2rem(-64px) px2rem(-24px);

		}

		.password{
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
			margin-left:px2rem(80px);
			float:left;
		}
		span{
			float:right;
			color:#626365
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
	.zhaohui{
		width:100%;
		height:px2rem(40px);
		color:#666;
		font-size: px2rem(14px);
		.s1{
			float:left;
		}
		.s2{
			float:right;
		}
	}
	.qq{
		width:100%;
		height:px2rem(40px);
		float:left;
		text-align: center;
		display:flex;
		justify-content:space-between;
		align-items:center;
		div{
			width:32%;
			background:#ccc;
			height:px2rem(1px);

		}
		span{
			color: #878686
		}
	}
	.zhifubao{
		width:px2rem(200px);
		height:px2rem(50px);
		list-style:none;
		margin:px2rem(60px) auto;
		li:nth-child(1){
			width:px2rem(60px);
			height:px2rem(60px);
			float:left;
			background: url("../../../assets/img/loginIcon.png") no-repeat;
			background-position: px2rem(-70px) px2rem(-90px);
		}
		li:nth-child(2){
			width:px2rem(60px);
			height:px2rem(60px);
			float:right;
			background: url("../../../assets/img/loginIcon.png") no-repeat;
			background-position: px2rem(-150px) px2rem(-90px);


		}
	}

}
</style>