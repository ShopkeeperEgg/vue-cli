<style scope lang="less">
    body {
        background-color: #f9fbff;
    }

    .wal {
        > .title {
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
        .count {
            width: 100%;
            height: 181px;
            margin-bottom: 20px;
            background-color: #fff;
            -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 2px 6px;
            box-shadow: rgba(0, 0, 0, 0.1) 0 2px 6px;
            background-image: url(../../assets/img/w-bg.jpg);
            background-size: 375px 194px;
            background-position-x: 428px;
            background-repeat: no-repeat;
            overflow: hidden;
            position: relative;
            padding-left: 20px;
            padding-top: 14px;
            margin-bottom: 20px;
            .value {
                font-size: 14px;
                color: #4D4D4D;
                font-weight: 300;
                margin-bottom: 10px;
            }
            .amount {
                font-size: 24px;
                font-weight: 500;
                color: #3D96FF;
                img {
                    width: 24px;
                    vertical-align: middle;
                    margin-bottom: 3px;
                }
            }
            .rmb {
                margin-top: 10px;
                font-size: 14px;
                color: #3D96FF;

            }
            .btnArea {
                margin-top: 14px;
                a {
                    width: 150px;
                    height: 40px;
                    margin-right: 20px;
                    line-height: 40px;
                    color: white;
                    border-radius: 4px;
                    background-color: #FF65A2;
                    display: inline-block;
                    text-align: center;
                }
                .recharge {
                    background-color: #3D96FF;
                }
            }
            &:after {
                width: 10px;
                height: 200px;
                top: 0;
                position: absolute;
                background-color: #fff;
                content: '';
                left: 425px;
            }
        }
        .main {
            margin-bottom: 48px;
            .other {
                width: 390px;
                height: 430px;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.1) 0 2px 6px;
                float: left;
                .title {
                    padding: 0 20px;
                    width: 390px;
                    height: 46px;
                    background-color: #FAFAFA;
                    font-size: 16px;
                    color: #4D4D4D;
                    line-height: 46px;
                    margin-bottom: 20px;
                }
                .money {
                    padding: 0 20px;
                    .card {
                        margin-bottom: 20px;
                        .t {
                            font-size: 16px;
                            color: #4D4D4D;
                            padding-bottom: 10px;
                            margin-bottom: 10px;
                            border-bottom: 1px solid #D8D8D8;
                        }
                        .b {
                            color: #999999;
                            margin-bottom: 6px;
                        }
                        .i1 {
                            float: left;
                        }
                        .i2 {
                            float: right;
                        }
                    }
                }
            }
            .record {
                width: 390px;
                height: 430px;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.1) 0 2px 6px;
                float: right;
                .title {
                    width: 390px;
                    height: 46px;
                    background-color: #FAFAFA;
                    font-size: 16px;
                    color: #4D4D4D;
                    line-height: 46px;
                    margin-bottom: 20px;
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
                                width: 30px;
                                height: 2px;
                                border-radius: 1px;
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
                .view-more {
                    display: block;
                    width: 100%;
                    margin-top: 14px;
                    color: #3D96FF;
                    text-align: center;
                    font-size: 14px;
                    font-weight: 300;
                }
            }
        }
    }
</style>

<template>
    <div class="wal">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                我的钱包
            </div>
        </div>
        <div class="w800">
            <div class="count">
                <div class="value">
                    估值
                </div>
                <div class="amount">
                    <img src="../../assets/img/btc.png" alt=""> 30.65432721 BTC
                </div>
                <div class="rmb">¥ 1000323.35</div>
                <div class="btnArea">
                    <a href="#/en/recharge" class="recharge">Recharge</a>
                    <a href="#/en/withdraw" class="withdraw">Withdraw</a>
                </div>
            </div>
            <div class="main clearfix">
                <div class="other">
                    <div class="title">
                        其他资产
                    </div>
                    <div class="money">
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">BTC资产</div>
                                <div class="i2">1.64322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">估值</div>
                                <div class="i2">$ 4322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">可用资产</div>
                                <div class="i2">87.64322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">下单冻结</div>
                                <div class="i2">0.00000000</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="t clearfix">
                                <div class="i1">ETH资产</div>
                                <div class="i2">1.64322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">估值</div>
                                <div class="i2">$ 4322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">可用资产</div>
                                <div class="i2">87.64322365</div>
                            </div>
                            <div class="b clearfix">
                                <div class="i1">下单冻结</div>
                                <div class="i2">0.00000000</div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a href="/#/en/withdraw_history" class="view-more">查看更多</a>
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
                            <a href="/#/en/withdraw_history" class="view-more">查看更多</a>
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