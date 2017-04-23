<template>
<div class="baner">
	<mt-swipe :auto="4000"
	          :prevent="true">
		<mt-swipe-item><img src="../assets/imags/1.jpg" height="240" width="427"></mt-swipe-item>
		<mt-swipe-item><img src="../assets/imags/2.jpg" height="240" width="427"></mt-swipe-item></mt-swipe-item>
		<mt-swipe-item><img src="../assets/imags/3.jpg" height="240" width="427"></mt-swipe-item></mt-swipe-item>
	</mt-swipe>
</div>
</template>

<script type="text/javascript">
  export default {
  	 name:'baner'
  }
	
</script>

<style lang="less">
.baner{
	height:8rem; 
}
	
</style>