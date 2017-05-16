<template>
   <div id="list">
      <div class="listLeft">
         <div class="tabLeft tabActive">衣服</div>
         <div class="tabLeft">裤子</div>
         <div class="tabLeft">鞋子</div>
         <div class="tabLeft">帽子</div>
         <div class="tabLeft">手机</div>
         <div class="tabLeft">零食</div>
      </div>
      <div class="listRight">
          <div class="listContentPart" style="display:block;">
           
               <div class="listCommodityPart" v-for="item in items">
                   <div class="listCommodityPic"><img :src="item.imgurl" class="listPic"/></div>
                   <div class="listCommodityTxt">{{item.title}}</div>
                   <div class="listCommodityPrice">￥{{item.money}}</div>
               </div>
           

          </div>
          <div class="listContentPart">2</div>
          <div class="listContentPart">3</div>
          <div class="listContentPart">4</div>
          <div class="listContentPart">5</div>
          <div class="listContentPart">6</div>
      </div>
      <footbar></footbar>
   </div>
</template>
<script type="text/javascript">
import Footbar from '../../components/Footbar.vue'
function setWidth(){
    var listRightWidth = $(document).width() - $(".listLeft").width();
    console.log($(document).width());
    console.log($(".listLeft").width());
    console.log(listRightWidth);
	$(".listRight").css("width",listRightWidth);
}

export default {
  name:'list',
  components:{Footbar},
  data () {
    return {
      items:[{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      },{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      },{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      },{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      },{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      },{
        imgurl:'../../../static/imags/yifu/y1.jpg',
        title:'日系男女连帽',
        money:60.00
      }]
    }
  },
  mounted:function() {
  	//当元素渲染出来后
  	setWidth();

    $('.listLeft .tabLeft').click(function(){
      $('.listLeft .tabLeft').removeClass('tabActive');
      $(this).addClass('tabActive');
      $(".listRight .listContentPart").hide().eq($(this).index()).show();
    });
  }
}


</script>

<style lang="less" scoped>
.listLeft{
  float:left;
	width:80px;
	height:100%;
  font-size:13px;
}
.tabLeft{
  width:100%;
  height:40px;
  line-height:40px;
  color:#B5B5B5;
}
.tabActive{
  background:white;
  color:#222222;
}
.listRight{
  float:right;
	background:white;
	height:100%;
  overflow:auto;
}
.listContentPart{
  width:100%;
  background:white;
  display:none;
  height:1000px;
}
.listCommodityPart{
  float:left;
  margin-left:1rem;
  margin-top:1rem;
  font-size:0.5rem;
}
.listPic{
  width:5.5rem;
  height:7rem;
}
</style>