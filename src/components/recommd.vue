<template>
  <div class="recommd">
  <div class="recommdOut">
      <div class="recommdBox">
        <img class="recommdicon" alt="" src="../../static/imags/recommd.png">
        <span>推荐</span>
      </div>
      <div class="recommdFirst">
        <a :href="baseDetailUrl+data[4].goodsId">
          <img :src="baseURI+data[4].imgUrl" >
        </a>
        <div class="recFirstDsc">
         <p class="recFirstDsc-title">
          {{data[4].goodsType}}
         </p>
         <p class="recFirstDsc-price">
          ￥{{data[4].price}}
        </p>
        </div>
      </div>
      <div class="recommdOther">
        <div class="recommdOtherOne">
          <div class="recommdOtherOne-1">
            <a :href="baseDetailUrl+data[0].goodsId">
              <img :src="baseURI+data[0].imgUrl">
            </a>
            <span>{{data[0].goodsType}}</span>
            <span class="recommdOtherPrice">￥{{data[0].price}}</span>
         </div>
         <div class="recommdOtherOne-2">
           <a :href="baseDetailUrl+data[1].goodsId">
             <img :src="baseURI+data[1].imgUrl">
           </a>
           <span>{{data[1].goodsType}}</span>
           <span class="recommdOtherPrice">￥{{data[1].price}}</span>
         </div>
       </div>
       <div class="recommdOtherTwo">
        <div class="recommdOtherTwo-1">
         <a :href="baseDetailUrl+data[2].goodsId">
           <img :src="baseURI+data[2].imgUrl">
         </a>
         <span>{{data[2].goodsType}}</span>
         <span class="recommdOtherPrice">￥{{data[2].price}}</span>
       </div>
       <div class="recommdOtherTwo-2">
         <a :href="baseDetailUrl+data[3].goodsId">
           <img :src="baseURI+data[3].imgUrl">
         </a>
         <span>{{data[3].goodsType}}</span>
         <span class="recommdOtherPrice">￥{{data[3].price}}</span>
       </div>
     </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:['data'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      SearchBackground:'search-background',
      goodDetail:'goodDetail',
      baseURI:'../../static/picture/',
      baseDetailUrl:'goodDetail?goodsid='
    }
  },
  mounted:function(){
  }
}
</script>

<style lang="less" scoped>
  .recommdOut{
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 7px;
  }
  .recommdBox{
    text-align: left;
    span{
      color: #a58888;
      font-size: 16px;
    }
  }
  .recommd{
    padding: 0.5rem;
    .recommdicon{
      width: 1.2rem;
    }
    font-size: 0;
  }
  .recommdFirst{
    width: 100%;
    position: relative;
    img{
      width: 100%;
    }
  }
  .recFirstDsc{
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.1);
    padding: 0.35rem;
  }
  .recFirstDsc-title{
    text-align: left;
    font-size: 18px;
  }
  .recFirstDsc-price{
    text-align: right;
    font-size: 16px;
  }
  .recommdOther{
    div{
      box-sizing: border-box;
    }
    a{
      width: 100%;
      height: 10rem;
      display: inline-block;
      box-sizing: border-box;
      padding: 0.4rem;
      >img{
        width: 100%;
        height: 100%;
      }
    } 
    span{
      font-size: 16px;
      display: inline-block;
      margin: 0.25rem 0;
    }
  }
  .recommdOtherPrice{
    float: right;
  }
  .recommdOtherOne{
    div{
      display: inline-block;
      width: 50%;
      padding: 0.5rem;
      text-align: left;
    }
  }
  .recommdOtherTwo{
    div{
      display: inline-block;
      width: 50%;
      padding: 0.5rem;
      text-align: left;
    }
  }
</style>
