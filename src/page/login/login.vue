<template>
  <div class="login" id="login">
      <div class="login-header">
         <a href="#">&lt;</a>
      	 {{title}}
      </div>
     
     <div class="login-main">
     <div style="height:2rem;"></div>
     <div class="logo"></div>
      <div id="login-post">
      	<div class="username">
      		<label></label>
      		<input type="text" placeholder="请输入账号" name="username" v-model="userName" />
      	</div>
      	<div class="password">
      		<label></label>
      		<input type="password" placeholder="密码" name="password" v-model="password" />
      	</div>
        <input class="loginBtn" type="button" value="登录" @click="login"/>
      </div>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'登录',
      userName:"",
      password:""
    }
  },methods:{
    login:function(){
        return this.userName = userName;
        this.password = password;
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
		height: 100%;
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