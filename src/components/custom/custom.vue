<style scoped="scoped" lang="less">

</style>

<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

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
        components: {},
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