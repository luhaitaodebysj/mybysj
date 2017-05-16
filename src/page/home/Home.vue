<template>
  <div class="home" id="home">
    <div id="header">
     <Search></Search>
   </div>
   <div id="body">
    <Baner></Baner>
    <Recommd></Recommd>
    <div>
       <a href="list">更多商品</a>
    </div>
  </div>
   <footbar v-bind:index="index"></footbar> 
</div>
</template>

<script>
import Search from '../../components/Search.vue'
import Baner  from '../../components/Baner.vue'
import Footbar from '../../components/Footbar.vue'
import Recommd from '../../components/recommd.vue'
export default {
  name: 'home',
  data () {
    return {
      selected:"主页",
      index:0
    }
  },
  components:{Search,Baner,Footbar,Recommd}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#body{
  overflow-y: auto;
  margin-bottom: 53px;
}
#footer{
  border-top:1px solid #cdcdcd;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
