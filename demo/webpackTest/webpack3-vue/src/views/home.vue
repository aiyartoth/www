<template>
    <div id="home">
        <header-component></header-component>
        <h1>Home界面</h1>
        <h1 class="title">appvue.page!</h1>
        <!--文本插值-->
        <h2>{{message}}</h2>
        <h2 v-html="message"></h2>
        <!--v-model使用,级v-bind:className-->
        <div id="attr">
            <label for="r1">修改颜色</label>
            <input type="checkbox" v-model="class1_value" id="r1">
            <br>
            <div :class="{'class1-name':class1_value}">
                directiva v-bind:class
            </div>
        </div>
        <!--v-model-->
        <div class="input">
            <input type="text" v-model="inputMessage" :placeholder="inputPlaceholder">
        </div>
        <!--methods-->
        <div @click="log()">
            输出当前对象
        </div>
        <!---->
        <div>
            {{Num}}
        </div>
        <br>
    </div>
</template>
<script>
        import headerComponent from 'src/component/header.vue'
//        import headerComponent2 from '../component/header.vue'
//    var headerComponent = require("src/component/header.vue");
//    console.log(headerComponent);
//    console.log(headerComponent===headerComponent2,headerComponent2);

    export default {
        data:function () {
            return {
                message:"app.vue message!",
                class1_value:true,
                inputMessage:"",
                inputPlaceholder:"hello",
                Num:Math.random()
            }
        },
        methods:{
            log:function () {
                console.log(this)
            }
        },
        components: {
            headerComponent
        }
    }
</script>