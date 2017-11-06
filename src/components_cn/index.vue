<style scope lang="less">

</style>

<template>
    <div>
        <!--Do it!-->
        <nav-bar></nav-bar>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';
    import navBar from './nav.vue';
    import bottom from './bottom.vue';
    import home from './home/home';


    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                title: '我是一个小毛驴'
            }
        },
        methods: {
            // 绑定事件的方法

        },
        mounted: function () {
            this.$nextTick(function () {
                // 可以在此为所欲为
                //对DOM的操作放这
                //console.log(this);

            })
        },
        created() {

        },
        components: {
            // 引入的组件写在这里
            navBar, bottom
        },
        watch: {
            // 监听数据变化
            // a: function (val, oldVal) {
            //     console.log('new: %s, old: %s', val, oldVal)
            // },
            // // 方法名
            // b: 'someMethod',
            // // 深度 watcher
            // c: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        }
    }
</script>