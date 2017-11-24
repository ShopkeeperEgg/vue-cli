<style scoped="scoped" lang="less">
    .bottom {
        position: absolute;
        width: 100%;
        background-color: #4A4A4A;
        .w930 {
            height: 142px;
            position: relative;
            .logo {
                position: absolute;
                top: 46px;
                left: 69px;
                img {
                    width: 132px;
                    height: 42px;
                }
            }
            .cwt {
                position: absolute;
                top: 55px;
                left: 308px;
                a {
                    font-size: 12px;
                    color: #FFFFFF;
                    display: inline-block;
                    padding-right: 26px;
                    border-right: 1px solid #94ABC9;
                    margin-right: 26px;
                    &:last-child {
                        border-right: none;
                    }
                }
            }
            .cpr {
                font-size: 12px;
                color: #FFFFFF;
                font-weight: 300;
                position: absolute;
                left: 328px;
                top: 105px;
            }
        }
    }
</style>

<template>
    <div>
        <!--Do it!-->
        <div class="bottom">
            <div class="w930">
                <div class="logo">
                    <img src="../assets/img/logo2.png" alt="">
                </div>
                <div class="cwt">
                    <a href="#">联系我们</a>
                    <a href="#">关于我们</a>
                    <a href="#">使用条款</a>
                </div>
                <div class="cpr">
                    Copyright ©2017 Game.com. All Rights Reserved.
                </div>
            </div>
        </div>
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