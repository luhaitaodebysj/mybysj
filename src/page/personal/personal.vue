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
           <group>
           	<cell is-link title="账户余额:" link="order" value-align="left" :value="money">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/nextMoney.png" >
           	</cell>
           	<cell is-link title="全部订单" link="order" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/activity.png" >
           	</cell>
<!--            	<cell  title="上架商品" link="grounding" v-model="show1" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/commodity.png" >
           	</cell> -->
           	<cell is-link title="待付款" link="order" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/waitpay.png" >
           	</cell>
           	<cell is-link title="待收货" link="order" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/waitreceive.png" >
           	</cell>
           	<cell is-link title="待发货" link="order" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/daiFahuo.png" >
           	</cell>
           	<cell is-link title="收货地址" link="address" value-align="left">
           		<img class="iconstyle" slot="icon" src="../../../static/imags/adress.png" >
           	</cell>
           </group>
           <x-button type="primary" @click.native="showpopup">发布商品</x-button>
		</div>

		<div v-transfer-dom >
           <popup v-model="show1" height="100%">
               <Grounding v-on:close="close"></Grounding>	
           </popup>
        </div>
		<footbar v-bind:index="index"></footbar>
	</div>
</template>
<script type="text/javascript">
import Footbar from '../../components/Footbar.vue'
import Grounding from '../grounding/grounding.vue'
import {TransferDom , Group, Cell , Popup , XButton} from 'vux'
export default {
	directives: {
      TransferDom
    },
	components:{
       Group,Cell,Footbar,Grounding,XButton,Popup
	},
	data () {
		return {
			money:2000,
			index:2,
			show1:false
		}
	},
	methods:{
		showpopup:function(){
			this.show1 = true;
		},
		close:function(){
           this.show1 = false;
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
.iconstyle{
	width: 1.2rem;
    vertical-align: top;
    padding-right: 0.5rem;
}
</style>