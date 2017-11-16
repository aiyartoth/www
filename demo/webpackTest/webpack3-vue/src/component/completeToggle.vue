<template>
    <button type="button" class="button" @click="toggle(item)">
        <i class="fa fa-undo" v-if="item.completed"></i>
        <i class="fa fa-check-circle" v-else></i>
    </button>
</template>
<style type="text/css" scoped>
    .fa {
        display: block;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .fa-undo {
        background: black;
    }

    .fa-check-circle {
        background: red;
    }
</style>
<script>
    export default {
        name: 'completeToggle',
        props: ['item'],
        methods: {
            toggle(item) {
                this.$store.dispatch('TOGGLE_COMPLETED', {item: item});
            }
        }
    }
</script>