<template>
    <div id="grounding">
        <div class="header">
            <a class="close" @click="closePopup">关闭</a>
            <p class="put">发布</p>
        </div>
        <group :title="type">
            <selector  :options="list" v-model="defaultValue"></selector>
        </group>
        <div class="body">
            <div class="title">
                <label>标题</label>
                <input type="text" placeholder="" v-model="title" name="title">
            </div>
            <div class="discribe">
                <label>商品描述</label>
         <textarea v-model="discribe">
         </textarea>
            </div>
            <div class="price">
                <label>价格</label>
                <input type="number" placeholder="" v-model="price" name="price">
            </div>
            <div class="inventory">
                <label>库存量</label>
                <input type="tel" placeholder="" v-model="inventory" name="inventory">
            </div>
            <div class="goodsimg">
                <label>商品图片</label>
                <div class="upload">
                    <a href="">+添加图片</a>
                    <input type="file" name="img" accept="image/jpeg" id="upImg" @change="onchange($event)">
                </div>
            </div>
            <div class="imgbox">
                <img alt="" :src="img" v-for="img in imglist">
            </div>
            <input class="confirm" value="确认发布" type="button" @click="confirm">
        </div>
        <toast v-model="showPositionValue" type="text" :time="800" is-show-mask v-bind:text="toastText"></toast>
    </div>
</template>

<script>
    import {Toast,Group,Selector} from 'vux'
    export default {
        components: {Toast,Group,Selector},
        props: ['user'],
        name: 'app',
        data () {
            return {
                title: "",
                discribe: '',
                type:'商品分类',
                price: 0,
                toastText:'内容不能为空',
                inventory: 1,
                imglist: [],
                sureimgname: [],
                defaultValue:'其他',
                showPositionValue: false,
                list:["衣服","鞋子",'零食',"生活用品","数码","书籍","其他"]
            }
        },
        methods: {
            onchange: function (e) {
                var self = this;
                if (self.user) {
                    var p = e.target.files[0];
                    var oMyForm = new FormData();  //创建表单实例，模拟表单提交
                    oMyForm.append("goodsimg", p);
                    this.$http.post('/api/goods/put', oMyForm,
                            {
                                "headers": {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                            )
                            .then(function (results) {
                               var src = '../../static/picture/'+results.data;
                                self.imglist.push(src);
                                self.sureimgname.push(results.data);
                            }).catch(function (error) {
                        console.log(error);
                    });
                } else {
                  self.$router.push('login');
                }
            },
            confirm: function () {
                var me = this;
                var arr = [];
                var data = me.sureimgname;
                var data = {
                    userid: me.user,
                    title: me.title,
                    discribe: me.discribe,
                    imglist: me.sureimgname,
                    price: me.price,
                    inventory: me.inventory,
                    goodsType: me.defaultValue
                }


                console.log(data);
                if (this.title == "" || this.discribe == "" || this.imglist.length <= 0) {
                    this.showPositionValue = true;
                } else {
                    this.$http.post('api/goods/putgoods',data).then(function (results) {
                         if(results){
                          me.toastText = "上架成功";
                          me.showPositionValue = true;
                          me.title = '';
                          me.discribe = '';
                          me.imglist = [];
                          me.price = 0;
                          me.inventory = 1;
                          me.$emit("close");  
                         }
                    }).catch(function (error) {
                        console.log(error);
                    })
                }
            },
            closePopup: function () {
                //关闭时清空信息
                this.title = '';
                this.discribe = '';
                this.imglist = [];
                this.price = 0;
                this.inventory = 1;
                this.$emit("close");
            }
        },
        mounted: function () {
            this.imglist = [];
            this.title = "";
            this.discribe = '';
        }
    }
</script>

<style lang="less" scoped>
    .header {
        height: 2rem;
        margin: 0.5rem;
        line-height: 2rem;
        position: relative;
        border-bottom: 1px solid #ddd;

    >
    p {
        text-align: center;
    }

    }
    .close {
        position: absolute;
        left: 0;
    }

    .body {

    >
    div {
        height: 3rem;
        line-height: 3rem;
        display: flex;
        margin-top: 0.5rem;

    >
    label {
        flex: 1;
    }

    }
    }
    .title, .price, .inventory {

    >
    input {
        flex: 3;
        height: 70%;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd;
    }

    }
    .discribe {

    >
    label {
        flex: 1;
        vertical-align: top;
    }

    >
    textarea {
        flex: 3;
        outline: none;
        border: none;
    }

    }
    .upload {
        position: relative;

    >
    a {
        position: absolute;
    }

    >
    input {
        opacity: 0;
        display: inline-block;
        height: 100%;
    }

    }
    .imgbox {
        margin: 0.5rem;
        text-align: left;

    >
    img {
        width: 4rem;
        margin-left: 0.5rem;
    }

    }
    .confirm {
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
