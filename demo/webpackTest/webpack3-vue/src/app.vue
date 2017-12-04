<template>
    <div id="app-main" data-test="234">
        <ul class="nav-list">
            <li>
                <router-link class="link" :to="{path:'/'}">vuex</router-link>
                <router-link class="link" :to="{path:'/vuex',query:{pNode:1,cNode:2}}">vuex-path</router-link>
                <router-link class="link" :to="{name:'vuex'}">vuex-name</router-link>
                <router-link class="link" :to="{name:'vuex-child',params:{id:3},query:{aa:1}}">vuex-name2</router-link>
                <router-link class="link" :to="'/vuex'">vuex</router-link>
                <router-link class="link" :to="'/bd_map'">bd_map</router-link>
            </li>
        </ul>
        <router-view></router-view>

    </div>
</template>

<style lang="stylus" scoped="">
    *
        margin 0
        padding 0
        font-size 62.5%

    .nav-list
        list-style none
        li
            list-style none
            display block

    .link
        display inline-block
        font-size 20px
        line-height normal
        text-indent 40px
        text-decoration none
        font-weight bold
        color rebeccapurple
    a
        color red

</style>
<script>
    export default {}
</script>