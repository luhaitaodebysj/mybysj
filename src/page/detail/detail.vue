<template>
  <div class="detail" id="detail">
     <div class="detail-header">
         <a @click="back"><</a>
         {{title}}
      </div>

      <div class="detailTop">
         <div class="detailStatus">
           {{status}}
         </div>
         <div class="detailStatusPic1">
           <img src="../../../static/imags/shipped.png"  v-if="status=='已发货'"/>
           <img src="../../../static/imags/notshipped.png"  v-if="status=='未发货'" />
           <img src="../../../static/imags/success.png"  v-if="status=='交易成功'"/>
         </div>
      </div>

      <div class="detailAddress">
         <div class="detailAdsPic">
          <img src="../../../static/imags/adress.png" />
         </div>

         <div class="detailAdsInfo">
           <div class="detailAdsName">收货人：{{name}}</div>
           <div class="detailAdsPhone">{{phone}}</div>
         </div>

         <div class="detailAdsTxt">
         收货地址：{{address}}
         </div>
      </div>

      <div class="detailShop">
        <div class="detailShopPic">
          <img :src="imgurl" />
         </div>

         <div class="detailShopInfo">
           <div class="detailShopName">{{shopName}}</div>
           <div class="detailShopPhone">￥{{shopPrice}}</div>
         </div>

         <div class="detailShopInfo">
           <div class="detailShopName">数量：</div>
           <div class="detailShopPhone">x{{shopNum}}</div>
         </div>
      </div>
      <div class="detailBtnPart">
        <input type="button" :value="status" class="detailBtn"/>
      </div>

      <div class="detailOrder">
        <div class="detailOrderPic"><img src="../../../static/imags/xiadan.png" /></div>
        <div class="detailOrderTime">订单时间：{{time}}</div>
      </div>

      
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'detail',
  data () {
    return {
      title:'订单详情',
      status:'已发货',
      name:'卢海涛',
      phone:'13888888888',
      address:'湖北省武汉市江夏区阳光大道一号',
      imgurl:'../../../static/imags/yifu/y1.jpg',
      shopName:'这是衣服这是衣服',
      shopNum:'1',
      shopPrice:'99',
      time:'2017-5-17 17:48:32'
    }
  },
  methods:{
    back:function(){
      this.$router.back(-1);
    }
  }
}
</script>

<style  scoped lang="less">
.detail-header{
  height:1.5rem;
  font-size: 20px;
  color:#999999;
  line-height: 1.5rem;
  text-align: center;
  background: #F7F7FA;
  padding: 0.5rem;
  position: relative;
  letter-spacing: 3px;
  border-bottom:1px solid #DCDBE0;
  >a{
    position: absolute;
    left:0.5rem;
    color: #999999;
  }
}
.detailTop{
  width:100%;
  height:5rem;
  background: -webkit-linear-gradient(left, #04F7B4 , #0BD28A); 
  background: -o-linear-gradient(right, #04F7B4, #0BD28A); 
  background: -moz-linear-gradient(right, #04F7B4, #0BD28A); 
  background: linear-gradient(to right, #04F7B4 , #0BD28A); 
  .detailStatus{
    width:5rem;
    float:left;
    color:white;
    margin-top:1.8rem;
    margin-left:1rem;
  }
  .detailStatusPic1{
    float:right;
    margin-right:2rem;
    margin-top:1rem;
    img{
      width:3rem;
      height:3rem;
    }
  }
}

.detailAddress{
  border-bottom:1px solid #E0E0E0;
  overflow:hidden;
  background:white;
  .detailAdsPic{
    width:2.6rem;
    height:4rem;
    float:left;
    img{
      width:2rem;
      height:2rem;
      margin-top:1rem;
    }
}
.detailAdsInfo{
    float:left;
    width:15rem;
    margin-top:0.3rem;
    .detailAdsName{
      float:left;
    }
    .detailAdsPhone{
      float:right;
    }
  }
.detailAdsTxt{
  width:15rem;
  float:left;
}
}

.detailShopPic{
    width:4rem;
    height:4rem;
    float:left;
    img{
      width:4rem;
      height:4rem;
    }
}
.detailShopInfo{
    float:left;
    width:13.5rem;
    margin-top:0.3rem;
    .detailShopName{
      padding-left:1rem;
      float:left;
    }
    .detailShopPhone{
      float:right;
    }
  }
.detailShopTxt{
  width:13rem;
  float:left;
}
.detailShop{
  margin-top:2rem;
  background:white;
  border-bottom:1px solid #E0E0E0;
  overflow:hidden
}
.detailBtnPart{
  width:100%;
  height:2rem;
  background:white;
}
.detailBtn{
  width:4rem;
  height:1.5rem;
  background:white;
  border:1px solid #888;
  border-radius:10px;
  margin-top:0.2rem;
  float:right;
}
.detailOrder{
  width:100%;
  margin-top:2rem;
  background:white;
  overflow:hidden;
}
.detailOrderPic{
  width:2.6rem;
  height:3rem;
  float:left;
    img{
      width:2rem;
      height:2rem;
      margin-top:0.5rem;
    }
}
.detailOrderTime{
  line-height:3rem;
}
</style>