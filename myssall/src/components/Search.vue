<template>
  <div class="search">
    <mt-search
    cancel-text="取消"
    placeholder="搜索"
    v-bind:class="SearchBackground">
  </mt-search >
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      SearchBackground:'search-background'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url('../common/less/common.less');
  .search{
    height: 1rem*(50/20);
  }
  //mint-ui样式改变  类替换
  //1.搜索框背景
  .mint-searchbar{
    background-color: @colorTheme;
  }
  .mint-searchbar-cancel{
    color: @colorddd;
  }
</style>
