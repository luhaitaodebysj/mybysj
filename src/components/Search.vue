<template>
  <div class="search">
  <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      SearchBackground:'search-background',
      searchListTop:'searchListTop',
      value: '搜索',
      defaultResult:[
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
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
  .search>div{
    text-align: left;
  }
  //mint-ui样式改变  类替换
  //1.搜索框背景
  .mint-searchbar{
    background-color: @colorTheme;
  }
  .mint-searchbar-cancel{
    color: @colorddd;
  }
  .mint-search-list{
    padding-top: 2.5rem;
    z-index: 9999;
  }
</style>
