<template>
<div >
	<footer>
     <ul>
     	<li @click="shouye"><i class="iconfont icon-shouye"></i>
     		<p>首页</p>
     	</li>
     	<li @click="fenlei"><i class="iconfont icon-leimupinleifenleileibie"></i>
     	<p>分类</p>
     	</li>
     	<li><img src="../../../assets/img/img-1.png" ></li>
     	<li><i class="iconfont icon-gouwuche"></i>
     	<p>购物车</p>
     	</li>
     	<li @click="user"><i class="iconfont icon-wode"></i>
     		<p>我的酒仙</p>
     	</li>
     </ul>
     </footer>
	
</div>

</template>

<script>
import '@/assets/iconfont/iconfont.css'
import router from '@/components/router'
export default {

  name: 'footer',

  data () {
    return {

    };
  },
  methods: {
  	user(){
  		this.$router.push("/user")
  	}
  }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}
	
	footer{
		width:100%;
		height:px2rem(42px);
		background:#f1f1f1;
		position:fixed;
		bottom:0;
		flex:1;
		ul{
			width:100%;
			height:100%;
			display:flex;
			justify-content:space-around;
			list-style: none;
			li:nth-child(1){
				color:red;
			}
			li{
				text-align: center;
				img{
					width:px2rem(42px);
					height:px2rem(42px);
				}
				p{
					font-size:px2rem(13px);
				}
			}
		}
	}


</style>