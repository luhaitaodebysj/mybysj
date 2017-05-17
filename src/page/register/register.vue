<template>
  <div class="login" id="login">
      <div class="login-header">
         <a href="home"><</a>
      	 {{title}}
      </div>
     <div class="login-main">
     <div style="height:2rem;"></div>
     <div class="logo"></div>
      <div  id="login-post">
      	<div class="username">
      		<label>用户名</label>
      		<input type="text" placeholder="请输入账号" name="username" v-model="username">
      	</div>
        <div class="nickname">
          <label>昵称</label>
          <input type="text" placeholder="请输入昵称" name="nickmame" v-model="nickname">
        </div>
      	<div class="password">
      		<label>密码</label>
      		<input type="password" placeholder="密码" name="password" v-model="password">
      	</div>
        <div class="password">
          <label>密码</label>
          <input type="password" placeholder="重复密码" name="password" v-model="passwordAgin">
        </div>
        <input class="loginBtn" type="button" value="确定" @click="register"/>
      </div>
      </div>
      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask v-bind:text="msg"></toast>
  </div>
</template>

<script type="text/javascript">
import {Toast} from 'vux'
export default {
  components:{ Toast },
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'注册',
      username:'',
      password:'',
      nickname:'',
      passwordAgin:'',
      showPositionValue:false,
      msg:'内容不能为空'
    }
  },
  methods:{
    register:function(){
      var me=this;
      if(this.password!=this.passwordAgin){
        this.showPositionValue = true;
        this.msg = '两次密码不一致';
      } else {
              this.$http.post('/api/user/register',{
        username:me.username,
        password:me.password,
        nickname:me.nickname
      },{
        'headers':{
          'Content-Type':'application/json'
        }
      }).then(function(res){
        if(res.data){
          //注册成功后就跳转到登录页面
         me.$router.push('/login');
        }
        else{
        me.msg = '用户名已使用';
        me.showPositionValue = true;
        }
      }).catch(function(err){
        console.log(err);
      })
      }
    }
  }
}
</script>

<style  scoped lang="less">
input:focus { outline: none; }
input{
  height:2rem;
  border:none;
  background:none;
  line-height:2rem;
  font-size:17px;
}
.login-main{
  background:white;
  width:100%;
  height:100%;
}
#login-post{
	>div{
		height: 3rem;
    display: flex;
    line-height: 3rem;
	}
  label{
    flex:2; 

  }
	input{
    flex:3;
		height: 100%;
    -webkit-appearance: none; -moz-appearance: none; -o-appearance: none; appearance: none;
	}
}
.login-header{
  height:1.5rem;
	font-size: 20px;
	color:#999999;
	line-height: 1.5rem;
	text-align: center;
	background: #F7F7FA;
	padding: 0.5rem;
	position: relative;
	letter-spacing: 3px;
  border-bottom:1px solid #DCDBE0;
	>a{
		position: absolute;
		left:0.5rem;
		color: #999999;
	}
}

// .username{
//  width:15rem;
//  height:2rem;
//  border-radius:5px;
//  margin:0 auto;
//  background:#DADADA;
//  border:1px solid #B2B2B2;
//  margin-top:4rem;
//  filter:alpha(opacity=70);  
//  -moz-opacity:0.7;  
//  -khtml-opacity: 0.7;  
//   opacity: 0.7;
// }
// .password{
//  width:15rem;
//  height:2rem;
//  border-radius:5px;
//  margin:0 auto;
//  background:#DADADA;
//  border:1px solid #B2B2B2;
//  margin-top:2rem;
//  filter:alpha(opacity=70);  
//  -moz-opacity:0.7;  
//  -khtml-opacity: 0.7;  
//   opacity: 0.7;
// }
.logo{
  background:url(../../../static/imags/logo.png) no-repeat;
  width:195px;
  height:60px;
  margin:0 auto;
}
.loginBtn{
  background:#0BD28A;
  width:15rem;
  height:2rem;
  border-radius:5px;
  font-size:17px;
  margin-top:2rem;
  color:white;
}
</style>