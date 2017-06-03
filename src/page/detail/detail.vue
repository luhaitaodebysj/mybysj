<template>
  <div class="detail" id="detail">
     <div class="detail-header">
         <a @click="back"><</a>
         {{title}}
      </div>

      <div class="detailTop">
         <div class="detailStatus">
           {{status2}}
         </div>
         <div class="detailStatusPic1">
           <img src="../../../static/imags/shipped.png"  v-if="status=='2'"/>
           <img src="../../../static/imags/shipped.png"  v-if="status=='3'"/>
           <img src="../../../static/imags/notshipped.png"  v-if="status=='4'" />
           <img src="../../../static/imags/success.png"  v-if="status=='5'"/>
         </div>
      </div>

      <div class="detailAddress">
         <div class="detailAdsPic">
          <img src="../../../static/imags/adress.png" />
         </div>

         <div class="detailAdsInfo">
           <div class="detailAdsName">收货人：{{address.user}}</div>
           <div class="detailAdsPhone">{{address.telPhone}}</div>
         </div>

         <div class="detailAdsTxt">
         收货地址：{{address.address}}
         </div>
      </div>

      <div class="detailShop">
        <div class="detailShopPic">
          <img :src="baseURI+items.imgUrl" />
         </div>

         <div class="detailShopInfo">
           <div class="detailShopName">{{items.goodsName}}</div>
           <div class="detailShopPhone">￥{{items.goodsPrice}}</div>
         </div>

         <div class="detailShopInfo">
           <div class="detailShopName">数量：</div>
           <div class="detailShopPhone">x{{items.goodsNum}}</div>
         </div>
      </div>
      <div class="detailBtnPart">
        <input type="button" :value="status2" class="detailBtnLeft" @click="showPlugin" v-if="items.goodsStatus =='2' || items.goodsStatus=='4'"/>
        <input type="button" :value="status2" class="detailBtn"/>
      </div>

      <div class="detailOrder">
        <div class="detailOrderTime">订单号：{{items.orderNum}}</div>
        <div class="detailOrderTime">订单时间：{{items.orderTime}}</div>
        <div class="detailOrderTime">总价：{{items.orderTotalPrice}} RMB</div>
      </div>
      <toast v-model="showT" type="text" :time="1000" is-show-mask v-bind:text="toastText"></toast>
      <div v-transfer-dom>
        <confirm v-model="show"
        :title="title"
        @on-cancel="onCancel"
        @on-confirm="onConfirm()"
        @on-show="onShow"
        @on-hide="onHide">
        <p style="text-align:center;">{{msgBox}}</p>
      </confirm>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Confirm,Toast,TransferDomDirective as TransferDom } from 'vux'
export default {
  directives:{
    TransferDom
  },
  components:{Toast,Confirm},
  name: 'detail',
  data () {
    return {
      title:'订单详情',
      baseURI:'../../static/picture/',
      items:{},
      address:{},
      showT:false,
      toastText:'',
      status2:'',
      show:false,
      msgBox:'去付款'
    }
  },
  computed:{
    status:function(){
      var s = this.items.goodsStatus;
      var text = "";
      if (s == "2"){
         text = "待付款";
         this.status2 = '付款';
      } 
      if (s == '3'){
        text = '待发货';
        this.status2 = '卖家未发货';
      }
      if (s == '4'){
        text == '待收货';
        this.status2 = '收货';
      }
      if (s == '5'){
        text == '交易成功';
        this.status2 = '交易成功';
      }
      return text;
    }
  },
  methods:{
    back:function(){
      this.$router.back(-1);
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm () {
      var self = this;
      var s = this.items.goodsStatus;
      if( s == "2"){
        this.$http.post('api/order/pay',{
          totalMoney: self.items.orderTotalPrice,
          goodsId:self.items.goodsId,
          orderId:self.items.orderId
        }).then(function (results){
          if(results.data == "noMoney"){
            alert('没钱去充值');
          } else {
            self.$router.push('order');
          }
        })
      } else if(s == '4'){
        this.$http.get('api/order/take',{
          params:{
             goodsId:self.items.goodsId,
          }
        }).then(function (results){
           if(results.data){
              self.status2 = '交易成功';
              $('.detailBtnLeft').hide();
           }
        })
      }
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      console.log(this.status2);
      if(this.status2 == "付款"){
        this.msgBox = "付款"+this.items.orderTotalPrice+"元";
      } else{
        this.msgBox = this.status2;
      }
       this.show = true;
    }
  },
  mounted:function (){
    var self = this;
    var param = geturl(window.location.search);
    this.$http.get('api/order/orderDetail',{
      params:{
        goodsId:param.goodsId
      }
    }).then(function (results){
          self.items = results.data[0];
          self.address = results.data[1];
    })
  },
  destroyed:function (){
    console.log(111);
    this.items = {};
  }
}

 //分解url
 var geturl = function (url){
   var p = {};
   var arr = url.substring(1).split('&');
     for(var i = 0;i < arr.length;i++){
        var a = arr[i].split("=");
        p[a[0]] = a[1];
     }
   return p
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
  text-align: left;
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
  outline: none;
  width:4rem;
  height:1.5rem;
  background:white;
  border:1px solid #888;
  border-radius:10px;
  margin-top:0.2rem;
  float:right;
}
.detailBtnLeft{
  float: left;
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
  margin-left: 1rem;
  line-height:2rem;
  text-align: left;
}
</style>