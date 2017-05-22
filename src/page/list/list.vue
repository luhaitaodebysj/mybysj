<template>
   <div id="list">
      <div class="listLeft">
         <div class="tabLeft tabActive" data-type="yf" @click="tabchange($event)">衣服</div>
         <div class="tabLeft" data-type="sj" @click="tabchange($event)">书籍</div>
         <div class="tabLeft" data-type="sm" @click="tabchange($event)">数码</div>
         <div class="tabLeft" data-type="ls" @click="tabchange($event)">零食</div>
         <div class="tabLeft" data-type="ot" @click="tabchange($event)">其他</div>
      </div>
      <div class="listRight">
          <div class="listContentPart" style="display:block;">
               <div class="listCommodityPart" v-for="item in goodsList">
                  <a :href='"goodDetail?goodsid="+ item.goodsId'>
                   <div class="listCommodityPic"><img :src="baseURI+item.imgUrl" class="listPic"/></div>
                   <div class="listCommodityTxt">{{item.goodsName | formatTitle }}</div>
                   <div class="listCommodityPrice">￥{{item.price}}</div>
                   </a>
               </div>
          </div>
      </div>
      <footbar></footbar>
   </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
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
      baseURI:'../../static/picture/',
      goodsList:[],
      type:'yf'
    }
  },
  methods:{
    tabchange:function (e) {
      var self = this;
      var tab = e.target;
      var type = '';
      $('.listLeft .tabLeft').removeClass('tabActive');
      $(tab).addClass('tabActive');
      type = $(tab).attr("data-type");
      this.$http.get('api/home/more',{
        params:{
          type:type
        }
      }).then(function (results){
       self.goodsList = results.data;
     })
    }
  },
  mounted:function () {
  	//当元素渲染出来后
  	setWidth();
    var self = this;
    this.$http.get('api/home/more',{
      params:{
        type:self.type
      }
    }).then(function (results){
       self.goodsList = results.data;
    })
  }
}

//定义过滤器
Vue.filter('formatTitle', function (value, maxwidth) {
    maxwidth = maxwidth||8;
    value = value||"";
    if(value.length>0 && value.length > maxwidth){
      value =  value.substring(0,maxwidth)+'...';
    }
    return value;
  });

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