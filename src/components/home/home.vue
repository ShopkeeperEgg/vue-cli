<style scoped="scoped" lang="less">

</style>

<template>
    <div>
        <!--Do it!-->
        <!--轮播图-->
        <lbt></lbt>
        <!--游戏推荐-->
        <groom></groom>
        <!--登录模态框-->
        <div class="modal fade" id="sign_in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <login></login>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';
    import login from '../login';
    import lbt from './lbt';
    import groom from './groom';

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                title: '我是一个小毛驴',
                index: 1
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
            this.$emit('getIndex', this.index);

        },
        components: {
            // 引入的组件写在这里
            login, lbt, groom
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