<template>
  <div id='order'>
       <tab  v-model="index" >
        <tab-item  v-for="(tab, index) in list2" @on-item-click="change(tab)" :key="index">{{tab}}</tab-item>
      </tab>
<!--       <swiper v-model="index"  height="130px" :show-dots="false" v-for="item in items">
        <swiper-item v-for="(n, index) in content2" :key="index" v-show="item.goodsStatus == index">
          <div class="tab-swiper vux-center">
            <OrderList v-bind:data="item" ></OrderList>
          </div>
        </swiper-item>
      </swiper> -->
      <div>
        <OrderList v-for="item in items" v-bind:data="item" v-show="nowStatus == item.orderStatus || nowStatus == '3'"></OrderList>
      </div>
      <footbar v-bind:index="footbarIndex"></footbar>
  </div>
</template>

<script>
// v-for="(item, index) in content2" :key="index"
import Footbar from '../../components/Footbar.vue'
import OrderList from '../../components/orderList.vue'
import { Tab, TabItem,Swiper,SwiperItem} from 'vux'
const list = () => ['全部订单', '待付款', '待发货', '待收货']
const content = () => ['全部订单', '待付款', '待发货', '待收货']
export default {
  components:{Tab ,TabItem,Swiper,SwiperItem,OrderList,Footbar},
  data () {
    return {
      list2:list(),
      content2:content(),
      index:0,
      nowStatus:'3',
      footbarIndex:2,
      items:[]
    }
  },
  methods:{
   change:function(tab){
     switch (tab) {
      case "全部订单":this.nowStatus = "3";console.log(this.nowStatus);break;
      case "待付款":this.nowStatus = '0';console.log(this.nowStatus);break;
      case "待收货":this.nowStatus = '1';console.log(this.nowStatus);break;
      case "待发货":this.nowStatus = '2';console.log(this.nowStatus);break;
     }
   }
  },
  mounted:function (){
    var self = this;
    this.$http.get('api/order/orderList').then(function (results){
       if(results.data){
         self.items = results.data;
      } else {
        self.$router.push('login');
      }
    })
  }
}
</script>

<style lang="less" scoped>
 #order{
  margin-bottom: 60px;
 }
 .vux-swiper-item{
  border: 1px solid #ddd;
 }
</style>
