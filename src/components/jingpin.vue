<template>
<div id="jingpin">
	<hand></hand>
	<img src="../../static/img/jingpin/1.jpg" class="img1">
	<ul class="start">
		<li v-for="data in imglist">
			<img :src="data.src" />
		</li>
	</ul>
	
</div>
</template>

<script>
import hand from './module/home/header'

export default {

  name: 'dynamic',

  data () {
    return {
    	imglist:[
    			{href:"",src:"../../static/img/jingpin/2.jpg"},
    			{href:"",src:"../../static/img/jingpin/3.jpg"},
    			{href:"",src:"../../static/img/jingpin/4.jpg"},
    			{href:"",src:"../../static/img/jingpin/5.jpg"},
    			{href:"",src:"../../static/img/jingpin/6.jpg"},
    			{href:"",src:"../../static/img/jingpin/7.jpg"},
    			{href:"",src:"../../static/img/jingpin/8.jpg"},
    			{href:"",src:"../../static/img/jingpin/9.jpg"},
    			{href:"",src:"../../static/img/jingpin/10.jpg"},
    			{href:"",src:"../../static/img/jingpin/11.jpg"},
    			{href:"",src:"../../static/img/jingpin/12.jpg"},
    			{href:"",src:"../../static/img/jingpin/13.jpg"},
    			{href:"",src:"../../static/img/jingpin/14.jpg"},
    			{href:"",src:"../../static/img/jingpin/15.jpg"},
    			{href:"",src:"../../static/img/jingpin/16.jpg"},
    			{href:"",src:"../../static/img/jingpin/17.jpg"},
    			{href:"",src:"../../static/img/jingpin/18.jpg"},
    			{href:"",src:"../../static/img/jingpin/19.jpg"},
    			]

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

#jingpin{
	width:100%;
	overflow: hidden;
	.img1{
		width:100%;
		display:block;
	}
	.start{
		width:100%;
		list-style:none;
		li{
			width:50%;
			float:left;
			img{
				width:100%;
				display: block;
			}
		}
	}
}
</style>