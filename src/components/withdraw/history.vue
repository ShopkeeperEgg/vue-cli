<style scope lang="less">
    body {
        background-color: #f9fbff;
    }

    .wal-h {
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
        .record {
            width: 100%;
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.1) 0 2px 6px;
            min-height: 500px;
            padding-bottom: 100px;
            margin-bottom: 140px;
            .title {
                width: 100%;
                height: 46px;
                font-size: 16px;
                color: #4D4D4D;
                line-height: 46px;
                margin-bottom: 20px;
                background-color: #f9fbff;
                a {
                    width: 104px;
                    height: 100%;
                    display: inline-block;
                    text-align: center;
                    line-height: 46px;
                    position: relative;
                    &:hover {
                        /*color: #38CEAE;*/
                    }
                    &.active {
                        color: #38CEAE;
                        &:after {
                            width: 40px;
                            height: 3px;
                            border-radius: 1.5px;
                            content: "";
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: #38CEAE;
                            bottom: 0;
                        }
                    }
                }
            }
            .money {
                padding: 0 20px;
                .card {
                    padding-bottom: 6px;
                    margin-bottom: 6px;
                    border-bottom: 1px solid #D8D8D8;
                    .t {
                        font-size: 16px;
                        color: #4D4D4D;
                        .i1 {
                            float: left;
                            p {
                                color: #333333;
                                font-size: 14px;
                                font-weight: 500;
                            }
                            span {
                                font-size: 10px;
                                color: #717171;
                            }
                        }
                        .i2 {
                            float: right;
                            font-size: 10px;
                            color: #717171;
                            i {
                                color: #38CEAE;
                            }
                        }
                    }
                    .b {
                        margin-top: 10px;
                        padding-right: 25px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        color: #717171;
                        font-size: 12px;
                        span {
                            font-size: 10px;
                            color: #38CEAE;
                            display: inline-block;
                            margin-right: 14px;
                        }
                    }
                    &:last-child {
                        /*border-bottom: 0;*/
                    }
                }
            }
        }

    }
</style>

<template>
    <div class="wal-h">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a href="/#/en/wallet">我的钱包</a><span>></span><i>历史记录</i>
            </div>
        </div>
        <div class="w800">
            <div class="record">
                <div class="title">
                    <a @click="recordIndex=1" v-bind:class="{'active':recordIndex === 1}"
                       href="javascript:;">充值记录</a>
                    <a @click="recordIndex=2" v-bind:class="{'active':recordIndex === 2}"
                       href="javascript:;">提现记录</a>
                </div>
                <div class="money">
                    <div class="cz" v-show="recordIndex===1">
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div class="hide">待确认 (<i>3</i>/30）</div>
                                    <div class="">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                    </div>
                    <div class="tx" v-show="recordIndex===2">
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>200 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div>待确认 (<i>3</i>/30）</div>
                                    <div class="hide">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">
                                    <p>100 ETH</p>
                                    <span>2017-10-10 18:36:04</span>
                                </div>
                                <div class="i2">
                                    <div class="hide">待确认 (<i>3</i>/30）</div>
                                    <div class="">已完成</div>
                                </div>
                            </div>
                            <div class="b">
                                <span>地址</span>0xf19b8d85c8d8154d1c41eb243d9ae98dc6c44tetee
                            </div>
                        </div>
                    </div>

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
                recordIndex: 1,
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