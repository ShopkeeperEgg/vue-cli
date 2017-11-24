<style scoped="scoped" lang="less">
    body {
    }

    .wall2 {
        background-color: #f9fbff;
        PADDING-bottom: 150px;
        > .title {
            width: 100%;
            background-color: #FAFAFA;
            height: 60px;
            box-shadow: rgba(0, 0, 0, .5) 0 -1px 10px;
            margin-bottom: 26px;
            text-align: left;
            .w800 {
                line-height: 60px;
                font-size: 20px;
                font-weight: 500;
                color: #4D4D4D;
                min-height: 480px;
                span {
                    display: inline-block;
                    margin-left: 14px;
                    margin-right: 14px;
                    font-size: 18px;
                    color: #4D4D4D;
                    font-weight: 400;
                }
                i {
                    font-size: 18px;
                    color: #4D4D4D;
                    font-weight: 400;
                }
            }
        }
    }

</style>

<template>
    <div class="wall2">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a href="/#/en/wallet">我的钱包</a><span>></span><i>添加地址</i>
            </div>
        </div>
        <add-area :status="'withdraw'"></add-area>
    </div>
</template>

<script>
    import addArea from './add_area';

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                index_w: 1, // 1-提现BTC 2-提现ETH
                address: '',
                showExtra: false
            }
        },
        methods: {
        },
        destroyed: function () {

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
            addArea
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