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
      	<div class="password">
      		<label>密码</label>
      		<input type="password" placeholder="密码" name="password" v-model="password">
      	</div>
        <div class="password">
          <label>请再次输入密码</label>
          <input type="password" placeholder="密码" name="password" v-model="passwordAgin">
        </div>
        <input class="loginBtn" type="button" value="确定" @click="register"/>
      </div>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'注册',
      username:'',
      password:'',
      passwordAgin:''
    }
  },
  methods:{
    register:function(){
      var me=this;
      this.$http.post('/api/user/register',{
        username:me.username,
        password:me.password
      },{
        'headers':{
          'Content-Type':'application/json'
        }
      }).then(function(res){
        if(res){
          //注册成功后就跳转到主页
          alert("注册成功");
          me.$router.push('/home');
        }
        else{
          alert("用户名已经使用");
        }
      }).catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style  scoped lang="less">
input:focus { outline: none; }
input{
  width:14rem;
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
		height: 2rem;
	}
	input{
    display: inline-block;
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

.username{
 width:15rem;
 height:2rem;
 border-radius:5px;
 margin:0 auto;
 background:#DADADA;
 border:1px solid #B2B2B2;
 margin-top:4rem;
 filter:alpha(opacity=70);  
 -moz-opacity:0.7;  
 -khtml-opacity: 0.7;  
  opacity: 0.7;
}
.password{
 width:15rem;
 height:2rem;
 border-radius:5px;
 margin:0 auto;
 background:#DADADA;
 border:1px solid #B2B2B2;
 margin-top:2rem;
 filter:alpha(opacity=70);  
 -moz-opacity:0.7;  
 -khtml-opacity: 0.7;  
  opacity: 0.7;
}
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