<style scoped="scoped" lang="less">
    .title {
        width: 100%;
        background-color: #FAFAFA;
        height: 60px;
        box-shadow: rgba(0, 0, 0, .5) 0 -1px 10px;
        margin-bottom: 26px;
        .w800 {
            line-height: 60px;
            font-size: 20px;
            font-weight: 500;
            color: #4D4D4D;
        }
    }
    .add {
        padding-bottom: 300px;
        background-color: #f9fbff;

    }
</style>

<template>
    <div class="add">
        <div class="title">
            <div class="w800">
                添加地址
            </div>
        </div>
        <add-area></add-area>
    </div>
</template>

<script>
    import addArea from '../withdraw/add_area.vue';

    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {

        },
        components: {addArea},
        watch: {
            // a: function (val, oldVal) {
            // },
            // obj: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        }
    }
</script>