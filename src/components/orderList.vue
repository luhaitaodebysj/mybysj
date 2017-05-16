<template>
	<div class="orderList">
		<div class="orderContent">
			<ul>
				<li class="orderTitle">
					<div class="orderHeaderImg"></div>
					<div class="orderHeaderMsg">
						<div>
							<div class="orderName">乐福汉堡></div>
							<div class="orderStaus">待付款</div>
						</div>
						<div class="orderTime">
							2017-05-01 12.13
						</div>
					</div>
				</li>
				<li class="orderDescribe">
					买了什么什么零食
				</li>
				<li class="orderDetail">
					<a class="check">查看订单详情</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {

		}
	}
}
	
</script>
 
<style scoped lang="less">
	ul,li{
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	.orderContent{
		padding: 0.5rem;

	}
	.orderTitle{
		height: 3.5rem;
		.orderHeaderImg{
			width: 3.5rem;
			height: 100%;
			float: left;
			background: url('../../static/imags/daiFahuo.png') no-repeat;
			background-size: 100%;
		}
		.orderHeaderMsg{
			margin-left: 4rem;
			>div{
				display: flex;
				height: 1.7rem;
			}
		}
	}
	.orderName{
		flex:1;
		text-align: left;
		font-size: 18px;
		color: #333;
		line-height: 1.7rem;
	}
	.orderStaus{
		flex:1;
		text-align: right;
		font-size: 18px;
		color: #333;
		line-height: 1.7rem;
	}
	.orderTime{
		font-size: 16px;
		color: #999;
		line-height: 1.7rem;
	}
	.orderDescribe{
		font-size: 18px;
		margin-left: 4rem;
		text-align: left;
	}
	.orderDetail{
		text-align: right;
		
	}
</style>