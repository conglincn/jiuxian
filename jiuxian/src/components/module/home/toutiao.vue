<template>
	<div id="toutiao">
		<div class="one">
			<img src="../../../assets/img/toutiao.jpg" >
			
		</div>
		<div class="tow">
		    <swiper :options="swiperOption" class="swiper-box">
			    <swiper-slide class="swiper-item">APP首单满100送100活动规则 点击查看!</swiper-slide>
			    <swiper-slide class="swiper-item">五粮液超级大牌日中奖公告!</swiper-slide>
			    <swiper-slide class="swiper-item">9.9全球酒仙狂欢节中奖名单</swiper-slide>
			    <swiper-slide class="swiper-item">奔富大牌日获奖名单公布</swiper-slide>
			    <swiper-slide class="swiper-item">泸州老窖品牌日获奖名单公布</swiper-slide>
			    <swiper-slide class="swiper-item">APP首单满100送100活动规则 点击查看!</swiper-slide>
			    <swiper-slide class="swiper-item">五粮液超级大牌日中奖公告!</swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

  name: 'toutiao',

  data () {
    return {
    	swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true,
          autoplay: 1000
        }
    }
  },

	components: {
		swiper,
    	swiperSlide
	},

	computed: {
      
    },

    mounted(){
    	
    }
};
</script>

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

#toutiao{
	width:100%;
	height: 36px;
	line-height:36px;
	float:left;


	.one{
		width:95px;
		height:16px;
		float:left;
		margin-left:10px;

		img{
			width:83px;
			height:100%;
		}
	}
	.tow{
		width:70%;
		height:100%;
		float:left;
		overflow: hidden;
		border-left:1px solid #ededed;
		.swiper-box {
			  height: 100%;
			  font-size: 15px;
			  text-align: center;
			  color:#333;
			}


	}

}
</style>