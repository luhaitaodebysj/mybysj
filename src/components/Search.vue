<template>
  <div class="search">
    <search
    @result-click="resultClick"
    :results="filterResult"
    v-model="value"
    @on-change="getResult"
    position="absolute"
    ref="search"></search>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from 'vux'
export default {
  components:{
    Search,
    Group,
    Cell,
    XButton
  },
  name: 'hello',
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult () {
      var array=this.results.filter(value=> new RegExp(this.value, 'i').test(value));
      this.filterResult=getResult(array);
    }  
  },
  data () {
    return {
      results:[
      'Apple',
      'Banana',
      'Orange',
      'Durian',
      'Lemon',
      'Peach',
      'Cherry',
      'Berry'],
      value: 'test',
      filterResult:[],
    }
  }
}
//设置搜索的内容
function getResult (val) {
  let rs = []
  for (let i = 0; i < val.length; i++) {
    rs.push({
      title: `${val[i]}`
    })
  }
  return rs
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
</style>
