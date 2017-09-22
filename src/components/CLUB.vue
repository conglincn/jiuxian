<template>
<div id="club">
	<hand></hand>
	<ul class="images">
		<li v-for="data in imglist">
			<img :src="data.src" />
		</li>
	</ul>
	
</div>
</template>

<script>
import hand from './module/home/header'

export default {

  name: 'CLUB',

  data () {
    return {
    	imglist:[
    			{href:"",src:"../../static/img/CLUB/1a.jpg"},
    			{href:"",src:"../../static/img/CLUB/2.jpg"},
    			{href:"",src:"../../static/img/CLUB/3.jpg"},
    			{href:"",src:"../../static/img/CLUB/4.jpg"},
    			{href:"",src:"../../static/img/CLUB/5.jpg"},
    			{href:"",src:"../../static/img/CLUB/6a.jpg"},
    			{href:"",src:"../../static/img/CLUB/7.jpg"},
    			{href:"",src:"../../static/img/CLUB/8b.jpg"},
    			{href:"",src:"../../static/img/CLUB/9b.jpg"},
    			{href:"",src:"../../static/img/CLUB/10.jpg"},
    			{href:"",src:"../../static/img/CLUB/11.jpg"},
    			{href:"",src:"../../static/img/CLUB/12.jpg"},
    			{href:"",src:"../../static/img/CLUB/13.jpg"},
    			{href:"",src:"../../static/img/CLUB/14.jpg"},
    			{href:"",src:"../../static/img/CLUB/15.jpg"},
    			{href:"",src:"../../static/img/CLUB/16.jpg"},
    			{href:"",src:"../../static/img/CLUB/17a.jpg"},
    			{href:"",src:"../../static/img/CLUB/18a.jpg"},
    			{href:"",src:"../../static/img/CLUB/19.jpg"},
    			{href:"",src:"../../static/img/CLUB/20.jpg"},
    			{href:"",src:"../../static/img/CLUB/21.jpg"},
    			{href:"",src:"../../static/img/CLUB/22.jpg"},
    			{href:"",src:"../../static/img/CLUB/23.jpg"},
    			{href:"",src:"../../static/img/CLUB/24a.jpg"},
    			{href:"",src:"../../static/img/CLUB/25.jpg"},
    			{href:"",src:"../../static/img/CLUB/26.jpg"},
    			{href:"",src:"../../static/img/CLUB/27.jpg"},
    			{href:"",src:"../../static/img/CLUB/28.jpg"},
    			{href:"",src:"../../static/img/CLUB/29.jpg"},
    			{href:"",src:"../../static/img/CLUB/30.jpg"},
    			{href:"",src:"../../static/img/CLUB/31.jpg"},
    			{href:"",src:"../../static/img/CLUB/32.jpg"},
    			{href:"",src:"../../static/img/CLUB/33a.jpg"},
    			{href:"",src:"../../static/img/CLUB/34.jpg"},
    			{href:"",src:"../../static/img/CLUB/end.jpg"},
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

#club{
	width:100%;
	overflow: hidden;
	.images{
		width:100%;
		list-style:none;
        margin-top:px2rem(40px);
		li{
			width:100%;
			height: auto;
			img{
				width:100%;
				display: block;
			}
		}
	}
}
</style>