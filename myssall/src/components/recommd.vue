<template>
  <div class="recommd">
  <div class="recommdOut">
      <div class="recommdBox">
        <img class="recommdicon" alt="" src="../../static/imags/recommd.png" >
        <span>推荐</span>
      </div>
      <div class="recommdFirst">
        <img src="../assets/imags/iphone_5s-005.jpg" >
        <div class="recFirstDsc">
         <p class="recFirstDsc-title">
           苹果5
         </p>
         <p class="recFirstDsc-price">
          ￥998.00
        </p>
        </div>
      </div>
      <div class="recommdOther">
        <div class="recommdOtherOne">
          <div class="recommdOtherOne-1">
            <a href="javascript:void(0)"></a>
            <span>书籍</span>
            <span class="recommdOtherPrice">￥111.00</span>
         </div>
         <div class="recommdOtherOne-2">
           <a href="javascript:void(0)"></a>
           <span>自行车</span>
           <span class="recommdOtherPrice">￥111.00</span>
         </div>
       </div>
       <div class="recommdOtherTwo">
        <div class="recommdOtherTwo-1">
         <a href="javascript:void(0)"></a>
         <span>零食</span>
         <span class="recommdOtherPrice">￥111.00</span>
       </div>
       <div class="recommdOtherTwo-2">
         <a href="javascript:void(0)"></a>
         <span>衣服</span>
         <span class="recommdOtherPrice">￥111.00</span>
       </div>
     </div>
      </div>
  </div>
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
  .recommdOtherOne-1{
    a{
      background: url("../../static/imags/book/java.jpg");
      background-size: 100% 100%;
    }
  }
  .recommdOtherOne-2{
    a{
      background: url("../../static/imags/car/car.jpg");
      background-size: 100% 100%;
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
  .recommdOtherTwo-1{
    a{
      background: url("../../static/imags/food/foods1.jpg");
      background-size: 100% 100%;
    }
  }
  .recommdOtherTwo-2{
    a{
      background: url("../../static/imags/yifu/yifu1.jpg");
      background-size: 100% 100%;
    }
  }
</style>
