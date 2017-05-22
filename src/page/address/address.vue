<template>
  <div id="address">
    <div class="header">
       <a href="personal" class="back"><</a>
       <p>收获地址</p>
       <span class="addAdress" @click="showScrollBox=true">管理</span>
    </div>

    <div class="adressList">
      <div class="adressName">
        <span>姓名：<i>{{user.user}}</i></span>
        <span>电话：<i>{{user.telPhone}}</i></span>
      </div>
      <div class="adressDetail">
        地址：{{user.address}}
      </div>
    </div> 


    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo">
      <div @click="showScrollBox=false">
        <span class="vux-close"></span>
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
              <input type="text" placeholder="详细地址" v-model='detailAddress'>
            </li>
          </ul>
          <button class="confirm" @click="confirm">确认选择</button>
         </div>

      </x-dialog>
    </div>
    
  </div>
</template>

<script>
import { XDialog,Group, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components:{XDialog,Group},
  name: 'app',
  data () {
    return {
      isLogin:false,
      name:"",
      tel:"",
      detailAddress:'',
      user:{
        user:'',
        telPhone:'',
        address:''
      },
      showScrollBox:false,
    }
  },
  methods:{
    confirm:function (){
      var self = this;
      this.$http.post('api/user/address',{
         name:self.name,
         tel:self.tel,
         address:self.detailAddress
      }).then(function(results){
         self.showScrollBox = false;
         self.user = results.data[0];
      })
    }
  },
  mounted:function () {
    var self = this;
    this.$http.get('api/user/getaddress').then(function (results){
       if(results.data == "tologin"){
          self.$router.push('login');
       } else if(results.data.length > 0){
         self.user = results.data[0];
       }
    })
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
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
.addAdress{
  position: absolute;
  right: 0;
  top:0;
}
.adressList{
  margin: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.adressName{
  span:nth-child(2){
    margin-left: 20%;
  }
  i{
    color: #ff6600;
    font-size: 15px;
  }
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
.vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
