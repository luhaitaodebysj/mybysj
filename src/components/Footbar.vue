<template>
	<div class="footbar">
	    <tabbar>
      <tabbar-item show-dot>
        <img slot="icon" src="../../static/imags/home1.png" >
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item selected link="#">
        <img slot="icon" src="../../static/imags/shopping1.png" >
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../static/imags/my1.png" >
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</div>
</template>

<script type="text/javascript">
import { Tabbar , TabbarItem} from 'vux'
  export default {
     components:{ Tabbar , TabbarItem },
  	 data () {
  	 	return {
  	 		selected:"主页",
  	 		paddingTab:'padding-tab'
  	 	}
  	 }

  }
	
</script>

<style lang="less" scoped>
  .footbar{
  	width: 100%;
  	bottom: 2px;
  }
</style>