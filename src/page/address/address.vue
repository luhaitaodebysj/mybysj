<template>
  <div id="address">
    <div class="header">
       <a href="personal" class="back"><</a>
       <p>收获地址</p>
    </div>

    <div class="body">
      <ul>
        <li class="name">
          <label>姓名</label>
          <input type="text" placeholder="姓名" v-model="name">
        </li>
        <li class="tel">
        <label>电话</label> 
          <input type="tel" placeholder="电话" v-model="tel">
        </li>
        <li class="peopleadress">
        <label>详细地址</label>
          <input type="text" placeholder="详细地址" v-model='detailAdress'>
        </li>
      </ul>
      <button class="confirm">确认选择</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name:"",
      tel:"",
      detailAdress:''
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  height: 2.5rem;
  margin: 0.5rem;
  line-height: 2.5rem;
  position: relative;
  border-bottom: 1px solid #ddd;
}
.back{
  position: absolute;
  left:0;
}
.body{
  margin: 0.5rem;
  li{
    height: 3rem;
    text-align: left;
    line-height: 3rem;
    display: flex;
    >label{
      flex:1

    }
    >input{
      flex:3;
      border: none;
      outline: none;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      padding-left: 1rem;
      margin: 0.5rem 0;
    }
  }
}
.confirm{
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 18px;
}
</style>
