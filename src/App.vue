<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Footbar from './components/Footbar.vue'
export default {
  name: 'app',
  components:{Footbar}
}
</script>

<style lang="less">
@import url(./common/less/common.less);
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
