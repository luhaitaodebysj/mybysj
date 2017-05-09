<template>
  <div>
    <swiper loop auto :list="imglist"></swiper>
  </div>
</template>

<script>
import { Swiper } from 'vux'

const baseList = [{
  url: 'http://m.baidu.com',
  img: 'https://static.vux.li/demo/1.jpg'
}, {
  url: 'http://m.baidu.com',
  img: 'https://static.vux.li/demo/2.jpg'
}, {
  url: 'jhttp://m.baidu.com',
  img: 'https://static.vux.li/demo/3.jpg'
}]
export default {
  components: {
    Swiper
  },
  data () {
    return {
      imglist: baseList
    }
  }
}
</script>
<style scoped>
</style>