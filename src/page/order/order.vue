<template>
  <div id='order'>
       <tab  v-model="index">
        <tab-item  v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index"  height="130px" :show-dots="false" v-for="item in items">
        <swiper-item v-for="(item, index) in content2" :key="index">
          <div class="tab-swiper vux-center">
            <OrderList></OrderList>
          </div>
        </swiper-item>
      </swiper>
      <footbar v-bind:index="footbarIndex"></footbar>
  </div>
</template>

<script>
import Footbar from '../../components/Footbar.vue'
import OrderList from '../../components/orderList.vue'
import { Tab, TabItem,Swiper,SwiperItem} from 'vux'
const list = () => ['全部订单', '上架商品', '代付款', '待收货', '待发货']
const content = () => ['精选11111', '美食11111', '电影11111', '酒店1111', '外卖11111']
export default {
  components:{Tab ,TabItem,Swiper,SwiperItem,OrderList,Footbar},
  data () {
    return {
      list2:list(),
      content2:content(),
      index:0,
      footbarIndex:2,
      items:[1,2,34,5,7]
    }
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