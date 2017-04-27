<template>
  <div class="login" id="login">
      <div class="login-header">
         <a href="#"><</a>
      	 {{title}}
      </div>
      <form action="" method="post" id="login-post">
      	<div class="username">
      		<label></label>
      		<input type="tetx" placeholder="账号" name="username">
      	</div>
      	<div class="password">
      		<label></label>
      		<input type="tetx" placeholder="密码" name="password">
      	</div>
      </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'登录'
    }
  }
}
</script>

<style  scoped lang="less">
#login-post{
	margin-top:5rem;
	>div{
		margin: 1rem;
		height: 2.5rem;
	}
	input{
		height: 100%;
	}
}
.login-header{
	height: 2.5rem;
	font-size: 20px;
	color:white;
	line-height: 1.5rem;
	text-align: center;
	background: #ff6600;
	padding: 0.5rem;
	position: relative;
	letter-spacing: 3px;
	>a{
		position: absolute;
		left:0.5rem;
		color: white;
	}
}
</style>