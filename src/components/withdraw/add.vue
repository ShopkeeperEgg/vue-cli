<style scope lang="less">
    body {
        background-color: #f9fbff;
    }

    .wall2 {
        margin-bottom: 150px;
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
        .address {
            margin-bottom: 20px;
            p {
                font-size: 12px;
                color: #717171;
                letter-spacing: 0.86px;
                margin-bottom: 8px;
            }
            input {
                width: 100%;
                height: 46px;
                border: none;
                padding-left: 20px;
                padding-right: 52px;
                &::placeholder {
                    font-size: 12px;
                    color: #9B9B9B;
                }
            }
            .a {
                position: relative;
            }
            .a2 {
                input {
                    width: 448px;
                }
                i {
                    right: -8px;
                }
            }
            i {
                color: #3D96FF;
                cursor: pointer;
                font-size: 12px;
                letter-spacing: 0.86px;
                position: absolute;
                z-index: 1;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                padding: 10px;
            }
        }
        .d {
            color: #717171;
            font-size: 12px;
            margin-bottom: 8px;
            .d1 {
                float: left;
            }
            .d2 {
                float: right;
                text-align: right;
            }
        }
        .withdrawBtn {
            width: 500px;
            height: 40px;
            border-radius: 2px;
            color: white;
            background-color: #3D96FF;
            display: block;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            margin-top: 40px;
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
        <div class="w500">
            <div class="address">
                <p>备注名称</p>
                <div class="a a1">
                    <input type="text"/>
                    <i class="hide glyphicon glyphicon-triangle-bottom"></i>
                </div>
            </div>
            <div class="address">
                <p>地址</p>
                <div class="a a2">
                    <input type="text"/>
                    <i class="">
                        <img src="../../assets/img/little_ewm.png" alt="" width="36">
                    </i>
                </div>
            </div>
            <a @click="add" href="javascript:;" class="withdrawBtn">
                确认添加
            </a>
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
                index_w: 1, // 1-提现BTC 2-提现ETH
                address: '',
                showExtra: false
            }
        },
        methods: {
            // 确认添加
            add: function () {
                location.href = '/#/en/withdraw'
            }
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