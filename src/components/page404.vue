<style scoped="scoped" lang="less">

    .p404 {
        width: 100%;
        height: 100%;
        text-align: center;
        img {
            width: 227px;
            margin-bottom: 57px;
            margin-top: 151px;
        }
        p {
            font-size: 24px;
            color: #4D4D4D;
            font-family: 'PingFang HK','微软雅黑';
            text-align: center;
            margin-bottom: 200px;
        }
    }
</style>

<template>
    <div class="p404">
        <!--Do it!-->
        <img src="../assets/img/404img.png" alt="">
        <p>哇哦～出错了～</p>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

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