<template>
  <div id="grounding">
   <div class="header">
     <a class="close" @click="showPopup">关闭</a>
     <p class="put">发布</p>
   </div>
   <div class="body">
      <div class="title">
         <label>标题</label>
         <input type="text" placeholder="" v-model="title">
      </div>
      <div class="discribe">
         <label>商品描述</label>
         <textarea v-model="discribe">
         </textarea>
      </div>
      <div class="goodsimg">
        <label>商品图片</label>
        <div class="upload">
           <a href="">+添加图片</a>
           <input type="file" accept="image/jpeg" id="upImg" @change="onchange">
        </div>
      </div>   
   </div>
    <div class="imgbox">
        <img alt="" :src="src">
    </div>
   <div class="confirm" @click="confirm">
       确定发布
   </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title:"",
      discribe:'',
      src:''
    }
  },
  methods:{
    onchange:function(){
      var p = $("#upImg").val();
      if(p){
        var arry = p.split('\\');
        this.src = "../../../static/imags/"+arry[arry.length-1];
      }
    },
    confirm:function(){
      var me = this;
      var data = {
        title:me.title,
        discribe:me.discribe,
        src:me.src
      }
      this.$http.post('/api/upimg',data).then(function(){

      }).catch(function(){

      })
    },
    showPopup:function(){
      this.$emit("close");
    }
  }
}
</script>

<style lang="less" scoped>
 .header{
  height: 2rem;
  margin: 0.5rem;
  line-height: 2rem;
  position: relative;
  border-bottom:  1px solid #ddd;
  >p{
    text-align: center;
  }
 }
 .close{
  position: absolute;
  left: 0;
 }
 .body{
  >div{
    height: 3rem;
    line-height: 3rem;
    display: flex;
    >label{
      flex:1;
    }
  }
}
 .title{
   >input{
    flex:3;
    height: 70%;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
  }
 }
 .discribe{
  >label{
    flex:1;
    vertical-align: top;
  }
  >textarea{
    flex:3;
    outline: none;
    border: none;
  }
 }
 .upload{
   position: relative;
   >a{
    position: absolute;
   }
   >input{
    opacity: 0;
    display: inline-block;
    height: 100%;
   }
 }
 .imgbox{
  margin: 0.5rem;
  text-align: left;
  >img{
    width: 4rem;
  }
 }
 .confirm{
  position: fixed;
  height: 3rem;
  bottom: 0;
  text-align: center;
  width: 100%;
  background: green;
  color: white;
  font-size: 20px;
  line-height: 3rem;
 }

</style>
