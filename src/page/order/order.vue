<template>
  <div id='order'>
       <tab  v-model="index">
        <tab-item  v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
  </div>
</template>



<script>
import { Tab, TabItem,Swiper,SwiperItem} from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']
export default {
  components:{Tab ,TabItem,Swiper},
  data () {
    return {
      list2:list(),
      index:0
    }
  }
}
</script>

<style lang="less" scoped>

</style>