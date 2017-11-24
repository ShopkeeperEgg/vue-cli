<style scoped="scoped" lang="less">
    .pay {
        .f-area {
            width: 100%;
            height: 180px;
            background-color: #F9FBFF;
            overflow: hidden;
            > .w500 {
                position: relative;
                .st-img {
                    width: 140px;
                    margin-top: 22px;
                    margin-left: 28px;
                    display: inline-block;
                    img {
                        width: 100%;
                    }
                }
                .st-msg {
                    position: absolute;
                    display: inline-block;
                    left: 228px;
                    top: 50%;
                    transform: translateY(-50%);
                    .info1 {
                        color: #4D4D4D;
                        font-size: 24px;
                    }
                    .info2 {
                        color: #999999;
                        font-size: 16px;
                        margin-top: 8px;
                    }
                }
            }
        }
        > .w500 {
            padding-top: 30px;
            padding-bottom: 120px;
            .order-num {
                color: #4D4D4D;
                font-size: 14px;
                margin-bottom: 11px;
            }
            .game-logo {
                border-radius: 4px;
                float: left;
                img {
                    width: 45px;
                    height: 45px;
                }
            }
            .game-detail {
                overflow: hidden;
                padding-left: 8px;
                margin-top: 11px;
                margin-bottom: 14px;
                p {
                    color: #4A4A4A;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 6px;
                }
                span {
                    color: #4A4A4A;
                    font-weight: 300;
                    letter-spacing: 0.86px;
                }
            }
            .clearfix {
                margin-bottom: 8px;
                color: #4D4D4D;
                font-size: 14px;
                .fl {
                    float: left;
                }
                .fr {
                    float: right;
                    text-align: right;
                }
                .fuc {
                    color: #FF8000;
                    font-weight: 500;
                }
            }
            .confirm-btn {
                .st124 {
                    display: block;
                    width: 100%;
                    background-color: #3D96FF;
                    border-radius: 2px;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    color: white;
                    margin-top: 40px;
                }
                .st3 {
                    a {
                        display: inline-block;
                        width: 240px;
                        background-color: #3D96FF;
                        border-radius: 2px;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        color: white;
                        margin-top: 40px;
                        vertical-align: middle;
                        &:first-child {
                            border: 1px solid #3D96FF;
                            background-color: transparent;
                            color: #3D96FF;
                            margin-right: 15px;

                        }
                    }
                }
            }
        }
    }

    .modal-dialog-buy {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 360px;
            padding: 20px 30px 24px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: #F9FBFF;
        }
        .confirm {
            font-size: 16px;
            color: #4D4D4D;
            text-align: center;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .d {
            margin-bottom: 8px;
            color: #4A4A4A;
            font-size: 14px;
            .d1 {
                float: left;
            }
            .d2 {
                float: right;
                text-align: right;
            }
            .d22 {
                font-weight: 500;
            }
            .d3 {
                float: right;
                text-align: right;
                color: #4D4D4D;
                margin-top: 8px;
            }
        }
        .m-tip {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999999;
            margin-bottom: 10px;
            a {
                color: #3D96FF;
            }
        }
        .dd {
            margin-bottom: 30px;
            .address {
                word-break: break-all;
                span {
                    display: inline-block;
                    margin-right: 8px;
                    font-weight: 500;
                }
            }
        }
        .cf-btn {
            a {
                width: 100%;
                display: block;
                height: 40px;
                font-size: 16px;
                text-align: center;
                border-radius: 4px;
                line-height: 40px;
                font-weight: 500;
                background-color: #3D96FF;
                color: white;
            }
            &.yebz {
                a {
                    background-color: #A6A9B0;
                    cursor: default;
                }
            }
        }
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            font-size: 30px;
        }
    }

</style>

<template>
    <div class="pay">
        <!--Do it!-->
        <div class="f-area">
            <div class="w500">

                <div class="st" v-if="status===1">
                    <div class="st-img">
                        <img src="../../assets/img/buy_success.png" alt="">
                    </div>
                    <div class="st-msg">
                        <div class="info1">
                            <img src="../../assets/img/dei.png" alt="" width="26">
                            预售成功
                        </div>
                        <div class="info2">
                            请您等待预售结束后的购买结果
                        </div>
                    </div>
                </div>

                <div class="st" v-if="status===2">
                    <div class="st-img">
                        <img src="../../assets/img/buy_success.png" alt="">
                    </div>
                    <div class="st-msg">
                        <div class="info1">
                            <img src="../../assets/img/dei.png" alt="" width="26">
                            购买成功
                        </div>
                    </div>
                </div>

                <div class="st" v-if="status===3">
                    <div class="st-img">
                        <img src="../../assets/img/buy_wait.png" alt="">
                    </div>
                    <div class="st-msg">
                        <div class="info1">
                            <img src="../../assets/img/3dots.png" alt="" width="26">
                            等待付款
                        </div>
                        <div class="info2">
                            15分钟内未付款订单将被取消 <br>
                            可在交易记录中查看订单
                        </div>
                    </div>
                </div>

                <div class="st" v-if="status===4">
                    <div class="st-img">
                        <img src="../../assets/img/buy_cancel.png" alt="">
                    </div>
                    <div class="st-msg">
                        <div class="info1">
                            <img src="../../assets/img/cha.png" alt="" width="26">
                            订单已取消
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w500">
            <div class="order-num">
                订单编号：{{cnm.out_trade_no}}
            </div>
            <div class="game-logo">
                <img :src="cnm.product.avatar" alt="">
            </div>
            <div class="game-detail">
                <p>{{cnm.product.coin_name}}：{{cnm.product.name}}</p>
                <span>购买价格：{{cnm.price / 100000000}} {{+cnm.currency === 0 ? 'BTC' : 'ETH'}}</span>
            </div>
            <div class="clearfix">
                <div class="fl">购买数量：</div>
                <div class="fr">{{cnm.quantity}} {{cnm.product.coin_name}}</div>
            </div>
            <div class="clearfix">
                <div class="fl">手续费：</div>
                <div class="fr">{{cnm.fee / 100000000}} {{+cnm.currency === 0 ? 'BTC' : 'ETH'}}</div>
            </div>
            <div class="clearfix">
                <div class="fl">总付款：</div>
                <div class="fr fuc">{{cnm.total_amount / 100000000}} {{+cnm.currency === 0 ? 'BTC' : 'ETH'}}</div>
            </div>
            <div class="confirm-btn">

                <div class="st" v-if="status===1">
                    <a class="st124" href="/#/en/home">完成</a>
                </div>

                <div class="st" v-if="status===2">
                    <a class="st124" href="/#/en/home">完成</a>
                </div>

                <div class="st3" v-if="status===3">
                    <a @click="cancelOrder" href="javascript:;">取消订单</a>
                    <a @click="pay" href="javascript:;">去付款</a>
                </div>

                <div class="st" v-if="status===4">
                    <a class="st124" href="/#/en/home">返回</a>
                </div>
            </div>
        </div>
        <div class="modal fade" id="buyConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-buy" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认购买
                    </div>
                    <div class="d clearfix">
                        <div class="d1">当前余额：</div>
                        <div class="d2">{{cnm.currency == 0 ? (wlData.btc_avail + ' BTC') : (wlData.eth_avail + ' ETH')}}</div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">需付款：</div>
                        <div class="d2 d22">
                            {{(cnm.total_amount / 100000000).toFixed(8) + (cnm.currency == 0 ? ' BTC' : ' ETH')}}
                        </div>
                        <br>
                        <div class="d3">
                            (交易手续费 ：{{(cnm.fee / 100000000).toFixed(8) + (cnm.currency == 0 ? ' BTC' : ' ETH')}})
                        </div>
                    </div>
                    <div class="m-tip" v-if="isYEBZ===false">
                        15分钟内未付款订单将被取消
                    </div>
                    <div class="m-tip" v-if="isYEBZ===true">
                        <img src="../../assets/img/gth.png" alt="" width="14">
                        当前余额不足，<a href="javascript:;" @click="goCz">立即充值</a>
                    </div>
                    <div class="cf-btn" v-if="isYEBZ===false">
                        <a href="javascript:;" @click="confirmBuy">确认付款</a>
                    </div>

                    <div class="cf-btn yebz" v-if="isYEBZ===true">
                        <a href="javascript:;">确认付款</a>
                    </div>


                    <button @click="goPageWait" type="button" class="close" data-dismiss="modal"
                            aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>

                </div>
            </div>
        </div>
        <div class="modal fade" v-bind:id="tips.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-l" role="document">
                <div class="modal-content">
                    <div class="tip-man" v-if="tips.man===1">
                        <img src="../../assets/img/success_man.png" alt="">
                    </div>
                    <div class="tip-man" v-if="tips.man===2">
                        <img src="../../assets/img/error_man.png" alt="">
                    </div>
                    <div class="tips">
                        {{tips.info}}
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';
    import buyMod from '../buy_mod'

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                orderId: 0,
                status: 1, // 1-预售成功 2-交易成功 3-等待付款 4-订单取消
                cnm: {product: {avatar: '', coin_name: '', name: '', tyoe: 4}},
                isYs: false,
                wlData: {},
                isYEBZ: false,
                tips: {
                    id: 'trade_tip',
                    info: '',
                    man: 1
                }
            }
        },
        methods: {

            // 点击了去充值
            goCz: function () {
                $('#buyConfirmModal').modal('hide');
                setTimeout(function () {
                    location.href = "#/en/recharge";
                }, 500)
            },

            shMod: function (tips, man) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#trade_tip').modal('show');
                setTimeout(function () {
                    $('#trade_tip').modal('hide');
                }, 1500);
            },
            // 取消订单
            cancelOrder: function () {
                var _this = this;
                if (_this.isYs === true) {
                    // 预售
                    t._post('game/presell/cancel', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('服务器繁忙请稍后再试', 2);
                        } else {
                            _this.refreshStatus();
                        }
                    })
                } else {
                    // 购买
                    t._post('game/order/cancel', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('服务器繁忙请稍后再试', 2);
                        } else {
                            _this.refreshStatus();
                        }
                    })
                }
            },
            // 付款
            pay: function () {
                $("#buyConfirmModal").modal('show');
            },
            // 更新订单状态
            refreshStatus: function () {
                let _this = this;
                this.orderId = this.$route.params.orderNum;
                t._get('game/order/' + this.orderId, {}, function (data) {
                    _this.wlData = data.body.common;
                    _this.cnm = data.body.data;
                    var money;
                    // 判断是否余额不足
                    if (_this.cnm.currency == 0) {
                        money = +_this.wlData.btc_avail;
                    } else {
                        money = +_this.wlData.eth_avail;
                    }
                    if (+money * 100000000 >= _this.cnm.total_amount) {
                        _this.isYEBZ = false;
                    } else {
                        _this.isYEBZ = true;
                    }

                    if (+_this.cnm.product.tyoe === 2) {
                        _this.isYs = true;
                    } else {
                        _this.isYs = false;
                    }
                    let status = _this.cnm.status;
                    console.log(status);
                    if (status === 0) {
                        // 交易中
                        _this.status = 3;
                    } else if (status === 1) {
                        if (_this.isYs) {
                            // 预售成功
                            _this.status = 1;
                        } else {
                            // 交易成功
                            _this.status = 2;
                        }
                    } else {
                        // 订单取消
                        _this.status = 4;
                    }
                })
            },

            // 点击确认付款
            confirmBuy: function () {
                var _this = this;

                $('#buyConfirmModal').modal('hide');
                if (_this.isYs === true) {
                    // 预售进行支付
                    t._post('game/product/presell', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('支付失败', 2);
                        } else {
                            _this.refreshStatus();
                        }
                    });
                } else {
                    // 购买进行支付
                    t._post('game/product/buy', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('支付失败', 2);
                        } else {
                            _this.refreshStatus();
                        }
                    });
                }
            },
            // 点击了叉叉
            goPageWait: function () {

            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // 可以在此为所欲为
                //对DOM的操作放这
                //console.log(this);

            })
        },
        created() {
            this.refreshStatus();
        },
        components: {
            // 引入的组件写在这里
            buyMod
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
        },
        props: ['orderNum']
    }
</script>