<template>
   <div id="list">
      <div class="list-left">
         <div class="tab-left tab-active">衣服</div>
         <div class="tab-left">裤子</div>
         <div class="tab-left">鞋子</div>
         <div class="tab-left">帽子</div>
         <div class="tab-left">手机</div>
         <div class="tab-left">零食</div>
      </div>
      <div class="list-right">
          <div class="content-part" style="display:block;">
               <div class="commodity-part">
                   <div class="commodity-pic"></div>
               </div>
          </div>
          <div class="content-part">2</div>
          <div class="content-part">3</div>
          <div class="content-part">4</div>
          <div class="content-part">5</div>
          <div class="content-part">6</div>
      </div>
   </div>
</template>
<script type="text/javascript">
function setWidth(){
    var listRightWidth = $(document).width() - $(".list-left").width();
    console.log($(document).width());
    console.log($(".list-left").width());
    console.log(listRightWidth);
	$(".list-right").css("width",listRightWidth);
}

export default {
  name:'list',
  mounted:function() {
  	//当元素渲染出来后
  	setWidth();

    $('.list-left .tab-left').click(function(){
      $('.list-left .tab-left').removeClass('tab-active');
      $(this).addClass('tab-active');
      $(".list-right .content-part").hide().eq($(this).index()).show();
    });
  }
}


</script>

<style lang="less" scoped>
.list-left{
  float:left;
	width:80px;
	height:100%;
  font-size:13px;
}
.tab-left{
  width:100%;
  height:40px;
  line-height:40px;
  color:#B5B5B5;
}
.tab-active{
  background:white;
  color:#222222;
}
.list-right{
  float:right;
	background:white;
	height:100%;
  overflow:auto;
}
.content-part{
  width:100%;
  background:white;
  display:none;
  height:1000px;
}
</style>