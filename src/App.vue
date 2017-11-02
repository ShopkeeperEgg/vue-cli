<style lang="less">

</style>

<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view>
        </router-view>
        <bottom>

        </bottom>
    </div>
</template>

<script>
    import home from './components/home/home';
    import tools from './assets/js/tools';
    import navBar from './components/nav.vue';
    import bottom from './components/bottom.vue';

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
        created() {
            // 可以在此为所欲为
            console.log(Vue);
        },
        components: {
            // 引入的组件写在这里
            home, navBar, bottom
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


