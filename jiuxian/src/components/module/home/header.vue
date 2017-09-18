<template>
<div>
	<div class="header">
		<span class="hand-img" @click="back"><img src="../../../assets/img/fanhui.jpg" ></span>
		<span class="hand-text">{{name}}</span>
		<span class="hand-i"><i class="iconfont icon-fenlei1"></i></span>
		
	</div>
	
</div>

</template>

<script>
import '@/assets/iconfont/iconfont.css'

export default {

  name: 'header',

  data () {
    return {
    	name:"选酒"
    }
  },
    methods: {
  	back(){
  		this.$router.go(-1);
  	}
  }

};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
	.header{
	width:100%;
	height: px2rem(40px);
	background-color: #de4943;
	color: #fff;
	display: flex;
	justify-content:space-between;
	align-items:center;
	font-size: px2rem(16px);
		.hand-img{
			margin-left: px2rem(15px);
		}

		.hand-i{
			margin-right:px2rem(15px);
		}
	}
</style>