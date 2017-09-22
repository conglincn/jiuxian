<template>
<div id="myUser">
	<hand></hand>
	<div class="userInfo clearfix">
		<img src="https://misc.jiuxian.com/m_user/images/usercenter/topBg.jpg" class="img1">
		<div class="pho">
			<div class="mas">
				<img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png" >
			</div>
			<div class="info">
				<p class="yhm">jxw98548769<span>立享CLUB会员</span></p>
				<p class="khd">下载客户端 美酒随时抢</p>
			</div>
		</div>
		<div class="order">
			<p class="grade">LV1 酒虫</p>
			<ul class="orderStatus ">
				<li>
					<p>0</p>
					<p>待付款</p>
				</li>
				<li>
					<p>0</p>
					<p>待发货</p>
				</li>
				<li>
					<p>0</p>
					<p>待收货</p>
				</li>
				<li>
					<p>0</p>
					<p>已完成</p>
				</li>
			</ul>
			
		</div>
	</div>
	<ul class="list">
		<li v-for="data in list">
			<img :src="data.src" >
			<p>{{data.p}}</p>
		</li>
	</ul>
	<button class="btn" @click="clear">退出登录</button>
</div>
</template>

<script>
import hand from './module/home/header'

export default {

  name: 'myUser',

  data () {
    return {
    	list:[	{src:"https://misc.jiuxian.com/m_user/images/usercenter/order.png  ",
    				p:"全部订单"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/cart.png  ",
    				p:"购物车"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/collect.png ",
    				p:"我的收藏"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/coupon.png",
    				p:"我的优惠券"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/history.png ",
    				p:"浏览历史"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/wallet.png ",
    				p:"我的钱包"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/exchange.png ",
    				p:"商品兑换"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/address.png ",
    				p:"地址管理"},
    			{src:"https://misc.jiuxian.com/m_user/images/usercenter/safe.png ",
    				p:"帐户安全"},]

    };
  },
  components:{
  	hand
  },
  methods:{
  	clear(){
  		localStorage.clear();
  		this.$router.push("/");
  	}
  }
};
</script>

<style lang="scss" scoped>

#myUser{
	.userInfo{
		width:100%;
		margin-top:40px;
		height:155px;
		position: relative;
		.img1{
			width:100%;
			position:absolute;
			z-index: -5;
			height:100%;

		}
		.pho{
			width:80%;
			height: 80px;
			position:absolute;
			top:20px;
			left:20px;
			.mas{
				width:26%;
				background-color: #fff;
				border-radius: 50%;
				border:1px solid #ccc;
				float:left;
				height:100%;
				img{
					width:90%;
					margin: 7% 0 0 5%;
				}
			}
			.info{
				padding-left: 100px;
				box-sizing: border-box;
				.yhm{
					margin-top:15px;
					color: #fa281b;
					span{
						background: #25282f;
					    color: #f1d08a;
					    font-size: 10px;
					    height: 16px;
					    line-height: 16px;
					    border-radius: 2px;
					    margin-left:5px;
					}
				}
				.khd{
					font-size: 14px;
					margin-top:10px;
				}
			}
		}
		.order{
			width:100%;
			height: 32%;
		    position: absolute;
		    bottom: 0;
		    left: 0;
		    color: #171516;
		    background:url("https://misc.jiuxian.com/m_user/images/usercenter/transparent.png"); 
		    .grade{
		    	font-size: 12px;
		    	width: 18%;
			    height: 82%;
			    text-align: center;
			    color: #fff;
			    margin-left: 7.5%;
			    padding-top: 2%;
			    float: left;
			    background: url("https://misc.jiuxian.com/m_user/images/usercenter/grade.png") no-repeat;
			    background-size: 100%;
			    float:left;
		    }
		    .orderStatus{
		    	width: 70%;
			    height: 100%;
			    float: right;
			    list-style:none;
			    li{
			    	width: 25%;
				    height: 100%;
				    float: left;
				    color: #000;
					text-align: center;
					font-size: 14px;				    
			    }
		    }
		}

	}
	.list{
		padding-top:20px;
		list-style:none;
		li{
			width: 33.3%;
		    height: auto;
		    margin-bottom: 20px;
		    padding: 0 5%;
		    float: left;
		    box-sizing: border-box;
		    img{
		    	width:100%;
		    }
		    p{
		    	text-align: center;
		    }
		}
	}
	.btn{
		width:80%;
		height:34px;
		margin:0 auto;
		display: block;
		background: #DE4B45;
		color:#fff;
		border:none;
		border-radius: 5px;
		font-size: 16px;
	}
}
</style>