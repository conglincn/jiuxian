<template>
<div id="user">
	<hand class="hhh"></hand>
	<ul class="login">
		<li ><router-link to="loginuser" tag="p" activeClass="active">
		账号登录</router-link></li>
		<li><router-link to="loginphone" tag="p" activeClass="active">手机动态密码登录</router-link></li>
	</ul>
	<router-view></router-view>
</div>

</template>

<script>
import '@/assets/iconfont/iconfont.css'
import hand from './module/home/header'
import loginuser from './module/user/loginUser'
import loginphone from './module/user/loginPhone'


export default {

  name: 'login',

  data () {
    return {

    };
  },

    components: {
  	hand,
  	loginuser,
  	loginphone
  }

};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#user{
	.login{
		width:100%;
		height:45px;
		line-height: 45px;
		margin-top:40px;
		.hhh{
			margin-top:40px;
		}
		li{
			float:left;
			list-style:none;
			width:50%;
			height:100%;
			text-align: center;
			.active{
				color:red;
				border-bottom:2px solid red
			}

		}
		}

}

</style>