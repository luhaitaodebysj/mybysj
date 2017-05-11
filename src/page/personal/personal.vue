<template>
	<div id="personal">
		<div class="personalInfo">
		   <div class="personalTop"></div>
		   <div class="personalPic"></div>
           <div class="personalTxt">
              <div class="personalName">你别说了再见</div>
              <div class="PersonalAccount">账号：abc123456</div>
           </div>
		</div>

		<div class="optionList">
		   <div class="myList"><div class="myListPic myListPic1"></div>&nbsp;&nbsp;账户余额:{{money}}<div class="jiantou"></div></div>
		   <div class="line"></div>
           <div class="myList"><div class="myListPic myListPic1"></div>&nbsp;&nbsp;全部订单<div class="jiantou"></div></div>
           <div class="line"></div>
           <div class="myList"><div class="myListPic myListPic5"></div>&nbsp;&nbsp;上架商品<div class="jiantou"></div></div>
           <div class="line"></div>
           <div class="myList"><div class="myListPic myListPic2"></div>&nbsp;&nbsp;待付款<div class="jiantou"></div></div>
           <div class="line"></div>
           <div class="myList"><div class="myListPic myListPic3"></div>&nbsp;&nbsp;待收货<div class="jiantou"></div></div>
           <div class="line"></div>
           <div class="myList"><div class="myListPic myListPic4"></div>&nbsp;&nbsp;售后订单<div class="jiantou"></div></div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			money:2000
		}
	}
}
</script>
<style lang="less" scoped>
#personal{
	background:#E9E8ED;
	width:100%;
	height:100%;
}
.personalTop{
	height:1px;
}
.personalInfo{
	width:100%;
	height:5rem;
	background:#0BD28A;
}
.personalPic{
    float:left;
    border:1px solid #056F48;
	width:50px;
	height:50px;
	background:url(../../../static/imags/photo.png) no-repeat;
	background-size:50px 50px;
	margin-top:24px;
	margin-left:30px;
}
.personalName,.PersonalAccount{
	height:1rem;
	font-size:16px;
	color:white;
	text-align:left;
	padding-left:5rem;
	margin-top:1.2rem;
}
.PersonalAccount{
	margin-top:0.3rem;
}
.optionList{
    margin-top:1rem;
	background:white;
}

.myList{
	width:100%;
	height:2rem;
	line-height:2rem;
	text-align:left;
	font-size:15px;
}
.myListPic{
    float:left;
	width:1.2rem;
	height:1.2rem;
	background-size:1.2rem 1.2rem;
	margin-top:0.4rem;
	margin-left:0.4rem
}
.myListPic1{
	background:url(../../../static/imags/activity.png) no-repeat;
	background-size: 1.2rem 1.2rem;
}
.myListPic2{
	background:url(../../../static/imags/waitpay.png) no-repeat;
	background-size: 1.2rem 1.2rem;
}
.myListPic3{
	background:url(../../../static/imags/waitreceive.png) no-repeat;
	background-size: 1.2rem 1.2rem;
}
.myListPic4{
	background:url(../../../static/imags/aftersale.png) no-repeat;
	background-size: 1.2rem 1.2rem;
}
.myListPic5{
	background:url(../../../static/imags/commodity.png) no-repeat;
	background-size: 1.2rem 1.2rem;
}
.jiantou{
    width:1.2rem;
    height:1.2rem;
	background:url(../../../static/imags/youjiantou.png) no-repeat;
	background-size: 1rem 1rem;
	margin-top:0.4rem;
	float:right;
}
.line{
	width:100%;
	height:1px;
	background-color:#EBEBEB;
}
</style>